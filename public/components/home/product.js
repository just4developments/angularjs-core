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
                self.list = resp.data.map((e) => {
                    if(typeof e.sizes === 'string') e.sizes = JSON.parse(e.sizes);
                    if(typeof e.tags === 'string') e.tags = JSON.parse(e.tags);
                    return e;
                });
                Category.find(1).then((resp) => {
                    self.categories = resp.data;
                    Category.find(2).then((resp) => {
                        self.tags = resp.data;
                    });
                });
            });
        };
        this.removeSize = (index) => {
            console.log(index, self.p);
            self.p.sizes.splice(index, 1);
        }
        this.isShow = (tags) => {
            if($rootScope.tagFilter.length === 0) return true;
            for(var i in $rootScope.tagFilter){
                let isOk = false;
                for(var j in tags){                
                    if(tags[j]._id == $rootScope.tagFilter[i]._id){
                        isOk = true;
                        break;
                    }                        
                }
                if(!isOk) return false;
            }
            return true;
        }
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
            self.p = { category_id : $rootScope.categoryId, special: self.type === 'hot', sizes: [{size: '', quantity: 0}], money0: 0, created_date: new Date(), tags: [] };
        }
        this.exists = function (item) {
            return _.findIndex(self.p.tags, (e) => {
                return e._id == item._id;
            }) > -1;
        }
        this.toggle = function (item) {
            var idx = _.findIndex(self.p.tags, (e) => {
                return e._id == item._id;
            });
            if (idx > -1) self.p.tags.splice(idx, 1);
            else self.p.tags.push(item);
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
            self.p = $window._.cloneDeep(item);
            if(!self.p.tags) self.p.tags = []; 
            self.p.created_date = new Date(self.p.created_date);
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
            if(self.p.sizes) self.p.sizes = angular.toJson(self.p.sizes);
            if(self.p.tags) self.p.tags = angular.toJson(self.p.tags);
            self.p.created_date = new Date(self.p.created_date);
            Upload.uploadFileToUrl(self.p, $config.apiUrl + '/product', method).then((resp) => {
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
