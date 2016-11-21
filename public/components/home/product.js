app.component('product', {
    template: require('./product.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', '$rootScope', function ($config, Product, Category, $scope, Upload, $window, $rootScope) {
        require('./product.scss');
        this.today = new Date();
        var clone = (obj, ignores) => {
            if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
                return obj;
            var temp;            
            if (obj instanceof Date){
                temp = new obj.constructor(); //or new Date(obj);
            }else {
                temp = obj.constructor();
            }

            for (var key in obj) {
                if(ignores && ignores.indexOf(key) !== -1) continue;
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    obj['isActiveClone'] = null;
                    temp[key] = clone(obj[key]);
                    delete obj['isActiveClone'];
                }
            }

            return temp;
        }
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
        this.toSizes = (sizes) => {
            return sizes.filter(e=>e.quantity > 0).map(e=>e.size).join(', ');
        }
        this.createNew = () => {
            self.isAdd = true;
            setTimeout(() => {
                self.p = { category_id : $rootScope.categoryId, special: self.type === 'hot' };
            });
        }  
        this.edit = (item) => {
            self.isAdd = true;
            setTimeout(() => {
                self.p = clone(item); 
            });            
        }
        this.delete = (item) => {
            Product.delete(item._id).then(() => {
              self.list.splice(self.list.indexOf(item), 1);  
            });
        }
        this.addSell = (item, index) => {
            self.trans = {
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
            self.trans.product.sizes[self.transIndex].quantity= +self.trans.product.sizes[self.transIndex].quantity - +self.trans.quantity;
            self.trans.product.quantity= +self.trans.product.quantity - +self.trans.quantity;
            self.trans.size = self.trans.product.sizes[self.transIndex];             
            if(self.trans.size.quantity < 0) return alert('Item not enough to sell. ' + self.trans.product.sizes[self.transIndex].quantity);
            self.trans.money = +self.trans.product.money * +self.trans.quantity;
            Product.sell(self.trans).then((rs) => {                
                self.isSell = 0;
            }).catch((e) => {
                self.trans.product.sizes[self.transIndex].quantity+= +self.trans.quantity;
                self.trans.product.quantity+= +self.trans.quantity;  
            });
        }
        this.save = () => {
            var method = self.p._id ? 'PUT' : 'POST';
            var p0 = clone(self.p, ['images']);
            p0.images = self.p.images;
            if(p0.sizes) p0.sizes = angular.toJson(p0.sizes);
            Upload.uploadFileToUrl(p0, $config.apiUrl + '/product', method).then((resp) => {
                console.log(resp.data);
                if(self.p._id){
                    self.list[self.list.findIndex(e=>e._id === self.p._id)] = resp.data;
                }else{                    
                    self.list.push(resp.data);
                }
                self.isAdd = false;
            }).catch((err) => {
                console.error(err);
            });
        };
    }]
});
