app.component('formular', {
    template: require('./formular.html'),
    controller: ['$config', function ($config) {
        require('./formular.scss');
        let self = this;
        this.isQuick = 0;
        this.rate = 3300;
        this.total = 0;
        this.kg = 0;
        this.percent = 5;
        this.kgMoney = 28000;
        this.taxService = 0;
        this.$routerOnActivate = (next) => {
            
        }
        this.products = [];
        this.addProduct = () => {
            this.products.push({money: 0, ship: 0, sl: 0});
        }
        this.calculate = () => {
            if(!self.percent) return alert('Chưa nhập phí dịch vụ');
            if(!self.kg) return alert('Chưa nhập số kg');
            let productMoney = 0;
            let productNum = 0;
            let productShip = 0;
            for(var i in self.products){
                productMoney += (self.products[i].money * self.products[i].sl);
                productShip += self.products[i].ship
                productNum += self.products[i].sl;
            }
            self.taxService = Math.round(productMoney * +self.percent / 100);
            self.total = Math.round(productMoney + productShip + self.taxService);
            productMoney = (productMoney + productShip) * self.rate;
            let kg0 = Math.floor(self.kg);
            let kgShip = (kg0 * self.kgMoney) + ((self.kg - kg0) * self.kgMoney);
            let blaMoney = (self.total * self.rate) - productMoney + kgShip;
            let eachProduct = Math.round(blaMoney / productNum);
            let recal =0;
            for(var i in self.products){
                self.products[i].price = ((self.products[i].money * self.products[i].sl + self.products[i].ship) * self.rate / self.products[i].sl) + eachProduct;
                recal += self.products[i].price * self.products[i].sl;
            }
            console.log('Re calculate', recal);
        }
        this.autoparse = () => {
            if(++self.isQuick === 2) {
                self.pars = self.pars.replace(/\t/g, ' ').replace(/ +/g, ' ').replace(/^ +| $/gm, '').replace(/^[^\d]+/gm, '');
                this.products = [];
                for(var r of self.pars.split('\n')){
                    var c = r.split(' ');
                    this.products.push({sl: +c[0], money: +c[1], ship: +c[2]});
                }
            }
            if(self.isQuick === 2) self.isQuick = 0;
        }
    }]
});
