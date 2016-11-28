app.component('product', {
    template: require('./product.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', '$rootScope', '$mdDialog', '$mdMedia', '$location', function ($config, Product, Category, $scope, Upload, $window, $rootScope, $mdDialog, $mdMedia, $location) {
        require('./product.scss');
        this.today = new Date();
        this.channels = [
            {code: 'facebook', name: 'Facebook'},
            {code: 'shopee', name: 'Shopee'}
        ];
        this.deviceSize = $mdMedia('xs') ? 'list.mob' : ($mdMedia('sm') ? 'list.tab' : 'list.pc');
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
                self.p = { category_id : $rootScope.categoryId, special: self.type === 'hot', sizes: [{size: '', quantity: 0}] };
            });
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
            setTimeout(() => {
                self.p = clone(item); 
            });            
        }
        this.delete = (item) => {
            if(!$window.confirm('Bạn có chắc muốn xóa sản phẩm này ?')) return; 
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
            var p0 = clone(self.p, ['images']);
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
        this.viewImage = (imgs, index) => {
            self.images = {
                imgs: imgs,
                index: index
            };
            $mdDialog.show({
                template: `<md-dialog aria-label="Image dialog">
             <md-dialog-content>
               <div style="position: relative; padding: 0px; margin: 0px;">
                <img image-src="images.imgs[images.index]" width="100%" ng-click="next()" watch="true" />
                <div layout-padding style="position: fixed; bottom: 0px; right: 0px; color: #d92469; font-size: 0.9em;">{{images.index+1}}/{{images.imgs.length}}</div>
               </div>
             </md-dialog-content>             
           </md-dialog>`,
                parent: angular.element(document.body),
                locals: {
                    images: self.images
                },
                clickOutsideToClose: true,
                escapeToClose: true,
                controller: ($scope, $mdDialog, images) => {
                    $scope.images = images;                    
                    $scope.next = () => {
                        if(++$scope.images.index > $scope.images.imgs.length-1){
                            $scope.images.index = 0;
                        }
                    }
                }
            });
        }
    }]
});
