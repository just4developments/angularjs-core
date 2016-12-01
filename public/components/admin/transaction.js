app.component('transaction', {
    template: require('./transaction.html'),
    controller: ['$config', 'Transaction', 'Category', '$scope', 'Upload', '$window', '$rootScope', '$mdMedia', function ($config, Transaction, Category, $scope, Upload, $window, $rootScope, $mdMedia) {
        require('./transaction.scss');
        let self =this;
        this.fromDate = new Date();
        this.toDate = new Date();        
        this.statusFilter;
        this.deviceSize = $mdMedia('xs') ? 'list.mob' : ($mdMedia('sm') ? 'list.tab' : 'list.pc');
        this.status = {"2": 'Đang gửi', "1": 'Đã nhận tiền', "-1": 'Đã hủy đơn hàng'};
        let loadData = () => {
            Transaction.find({from: self.fromDate.getTime(), to: self.toDate.getTime(), status: +self.statusFilter}).then((resp) => {
                self.list = [];
                self.summary = {
                    spending: {
                        num: 0,
                        money: 0
                    },
                    successed: {
                        num: 0,
                        money: 0
                    }
                };
                var isSameDay = function(d, d1) {
                    if(!d || !d1) return false;
                    d = new Date(d);
                    d1 = new Date(d1);
                    return d1.getFullYear() === d.getFullYear() && d1.getDate() === d.getDate() && d1.getMonth() === d.getMonth();
                }
                var tempDate;
                for(var item of resp.data){
                    if(!isSameDay(tempDate, item.created_date)){
                        tempDate = item.created_date;
                        self.list.push({created_date: item.created_date, list: [], spending: 0, successed: 0});
                    }
                    if(item.status === 2) {
                        self.summary.spending.num++;
                        self.summary.spending.money+= +item.money;
                        self.list[self.list.length-1].spending += +item.money;
                    }
                    if(item.status === 1) {
                        self.summary.successed.num++;
                        self.summary.successed.money+= +item.money;
                        self.list[self.list.length-1].successed += +item.money;
                    }
                    self.list[self.list.length-1].list.push(item);
                }
            });
        }
        this.$routerOnActivate = (next) => {
            self.type = next.params.filter;
            loadData();
        }
        this.updateStatus = (item) => {
            Transaction.update(item).then((rs) => {
                console.log(rs);
            });
        }
        this.filter = ()=>{
            loadData();
        }
    }]
});
