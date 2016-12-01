app.component('product', {
    template: require('./product.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', '$rootScope', '$mdDialog', '$mdMedia', '$location', '$facebook', 'Transaction', '$q', function ($config, Product, Category, $scope, Upload, $window, $rootScope, $mdDialog, $mdMedia, $location, $facebook, Transaction, $q) {
        require('./product.scss');
        this.today = new Date();
        this.channels = [
            {code: 'facebook', name: 'Facebook'},
            {code: 'shopee', name: 'Shopee'},
            {code: 'cometo', name: 'Đến lấy hàng'},
        ];
        this.deviceSize = $mdMedia('xs') ? 'list.mob' : ($mdMedia('sm') ? 'list.tab' : 'list.pc');        
        var self = this;
        this.isAdd = false;
        this.$routerOnActivate = (next) => {
            self.type = next.params.filter;
            Product.find($rootScope.categoryId, self.type).then((resp) => {
                self.list = resp.data;
                Category.find().then((resp) => {
                    self.categories = resp.data;
                });
            });
        };
        this.searchTextChange = (text) => {
            self.trans.buyer = text;
        }
        this.selectedItemChange = (item) => {
            self.trans.address = item.address;
            self.trans.buyer = item.buyer;
            self.trans.phone = item.phone;
        }
        this.querySearchBuyer = (txt) => {
            let deferred = $q.defer();
            Transaction.suggestBuyer(txt).then((rs) => {
                deferred.resolve(rs.data);
            }).catch((err) => {
                deferred.resolve([]);
                console.error(err);
            });
            return deferred.promise;
        }
        this.toSizes = (sizes) => {
            return sizes.filter(e=>e.quantity > 0).map(e=>e.size).join(', ');
        }
        this.createNew = () => {
            self.isAdd = true;
            self.p = { category_id : $rootScope.categoryId, special: self.type === 'hot', sizes: [{size: '', quantity: 0}], money0: 0 };
        }
        this.toggleVisible = (item) => {
            item.status = item.status === 0 ? 1 : 0;
            Product.update(item).then((resp) => {
                console.log(resp);
            });
        }  
        this.update = (item) => {
            Product.update(item).then((resp) => {
                self.list.sort((a, b) => {
                   return a.position - b.position; 
                });
            })
        }
        this.edit = (item) => {
            self.isAdd = true;
            self.p = $window._.clone(item);   
        }
        this.delete = (item) => {
            if(!$window.confirm('Bạn có chắc muốn xóa sản phẩm này ?')) return; 
            Product.delete(item._id).then(() => {
              self.list.splice(self.list.indexOf(item), 1);  
            });
        }
        this.addSell = (item, index) => {
            self.trans = {
                channel_name: 'facebook',
                product: item,
                quantity: 1,
                status: 2,
                created_date: new Date()
            };

            self.sizeName = item.sizes[index].size;
            self.transIndex = index;
            self.isSell = 1;
        }
        this.sell = () => {
            if(!self.trans.buyer) return alert('Buyer name is required');
            if(!self.trans.address) return alert('Address is required');
            if(!self.trans.quantity || +self.trans.quantity <= 0) return alert('Quantity must be greater 0');
            if(+self.trans.product.sizes[self.transIndex].quantity - +self.trans.quantity < 0) return alert('Item not enough to sell');
            self.trans.product.sizes[self.transIndex].quantity= +self.trans.product.sizes[self.transIndex].quantity - +self.trans.quantity;
            self.trans.product.quantity= +self.trans.product.quantity - +self.trans.quantity;
            self.trans.size = self.trans.product.sizes[self.transIndex];                         
            self.trans.money = +self.trans.product.money * +self.trans.quantity;
            Product.sell(self.trans).then((rs) => {                
                self.isSell = 0;
            }).catch((e) => {
                self.trans.product.sizes[self.transIndex].quantity+= +self.trans.quantity;
                self.trans.product.quantity+= +self.trans.quantity;  
                alert(e.data.message);
            });
        }
        this.save = () => {
            self.isAdd = false;
            var method = self.p._id ? 'PUT' : 'POST';
            var p0 = $window._.clone(self.p);
            p0.images = self.p.images;
            if(p0.sizes) p0.sizes = angular.toJson(p0.sizes);
            Upload.uploadFileToUrl(p0, $config.apiUrl + '/product', method).then((resp) => {
                if(self.p._id){
                    self.p.images = resp.data.images;
                    self.list[self.list.findIndex(e=>e._id === self.p._id)] = self.p;
                }else{                    
                    self.list.push(resp.data);
                }
                $location.path($location.path());
            }).catch((err) => {
                alert(err.data.message);
                self.isAdd = true;
            });
        }
    }]
});
