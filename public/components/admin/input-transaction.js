app.component('inputTransaction', {
    template: require('./input-transaction.html'),
    controller: ['$config', 'Product', function ($config, Product) {
        require('./input-transaction.scss');
        let self = this;
        self.apiUrl = $config.apiUrl;
        this.$routerOnActivate = (next) => {
            Product.findAll().then((resp) => {
                self.data = {};
                resp.data.map((e) => {
                   let date = new Date(e.created_date.substr(0, 10)); 
                   date = (date.getDate() +1) + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
                   if(!self.data[date]) {
                       self.data[date] = {
                           list: [],
                           money: 0,
                           money0: 0
                       }
                   }
                   self.data[date].money += e.money*e.quantity0;
                   self.data[date].money0 += e.money0*e.quantity0;
                   self.data[date].list.push(e);
                });
            });
        }
        
    }]
});
