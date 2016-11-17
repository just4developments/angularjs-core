app.component('product', {
    template: require('./product.html'),
    bindings: { $router: '<' },
    controller: ['$config', 'Product', 'Category', '$scope', 'Upload', '$window', function ($config, Product, Category, $scope, Upload, $window) {
        require('./product.scss');
        var clone = (obj, ignores) => {
            if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
                return obj;
            var temp;            
            if (obj instanceof Date){
                temp = new obj.constructor(); //or new Date(obj);
            } else {
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
            Product.find($window.sessionStorage.categoryId, self.type).then((resp) => {
                self.list = resp.data;
                Category.find().then((resp) => {
                    self.categories = resp.data;
                });
            });
        };        
        this.toSizes = (sizes) => {
            return sizes.map(e=>e.size).join(', ');
        }
        this.createNew = () => {
            self.isAdd = true;
            self.p = { category_id : $window.sessionStorage.categoryId, special: self.type === 'hot' };
        }  
        this.edit = (item) => {
            self.isAdd = true;
            self.p = clone(item);
        }
        this.delete = (item) => {
            Product.delete(item._id).then(() => {
              self.list.splice(self.list.indexOf(item), 1);  
            });
        }
        this.save = () => {
            // TODO: Doi lai clone p = p0 de ko bi update trung
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
