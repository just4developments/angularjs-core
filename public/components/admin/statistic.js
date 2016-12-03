app.component('statistic', {
    template: require('./statistic.html'),
    controller: ['$config', 'Transaction', function ($config, Transaction) {
        require('./statistic.scss');
        let dayOfWeek = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        let self = this;
        this.fromDate = new Date();
        this.fromDate.setDate(-14);
        this.toDate = new Date();
        let tabIndex = 0;        
        let opts = {
            zoomEnabled: false,
            animationEnabled: true,
            title: {
                text: "Thống kê tiền bán theo ngày"
            },
            axisY2: {
                valueFormatString: "0 ₫",
                interlacedColor: "#F5F5F5",
                gridColor: "#D7D7D7",
                tickColor: "#D7D7D7"
            },
            axisX: {
                gridColor: "Silver",
                tickColor: "silver",
                valueFormatString: "DD.DDD"
            },
            theme: "theme2",
            toolTip: {
                shared: false
            }
            // data: [{
            //     type: "line",
            //     lineThickness: 3,
            //     axisYType: "secondary",
            //     showInLegend: true,
            //     name: "Tiền bán hàng trong ngày",
            //     dataPoints: data
            // }]
        };
        this.filter = () => {
            if(tabIndex === 0) {
                self.chartMoneyByTime();
            }else if(tabIndex === 1){
                self.chartByProductType();
            }
        }
        this.chartByProductType = () => {
            tabIndex = -1;
            Transaction.statisticByType(self.fromDate.getTime(), self.toDate.getTime()).then((res) => {
                let data = res.data.map((e) => {
                    e.legendText = e.indexLabel = e._id.name;
                    delete e._id;
                    return e;
                });
                var chart = new CanvasJS.Chart("chartContainer2", {
                    title: {
                        text: "Tỉ lệ loại sản phẩm tiêu thụ"
                    },
                    animationEnabled: true,
                    legend: {
                        verticalAlign: "bottom",
                        horizontalAlign: "center"
                    },
                    data: [{
                        indexLabelFontSize: 20,
                        indexLabelFontFamily: "Monospace",
                        indexLabelFontColor: "darkgrey",
                        indexLabelLineColor: "darkgrey",
                        indexLabelPlacement: "outside",
                        type: "pie",
                        showInLegend: true,
                        toolTipContent: "{legendText}: {y} chiếc",
                        dataPoints: data
                    }]
                });
                chart.render();
                tabIndex = 1;
            });
        }
        this.chartMoneyByTime = () => {
            tabIndex = -1;
            let drawChart = (title, name, xformat, res) => {
                let data = res.data.map((e) => {
                    e.x = new Date(+e._id.year, +e._id.month || 0, +e._id.day || 1);
                    delete e._id;
                    return e;
                });
                var chart = new CanvasJS.Chart("chartContainer1", _.assignIn(opts, {
                    title: {
                        text: title
                    },
                    axisX: {
                        gridColor: "Silver",
                        tickColor: "silver",
                        valueFormatString: xformat
                    },
                    data: [{
                        type: "line",
                        lineThickness: 2,
                        axisYType: "secondary",
                        showInLegend: true,
                        name: name,
                        dataPoints: data
                    }]
                }));
                chart.render();
                Transaction.statisticByDayOfWeek(self.fromDate.getTime(), self.toDate.getTime()).then((res) => {
                    let data = res.data.map((e) => {
                        e.label = dayOfWeek[+e._id.dayOfWeek];
                        delete e._id;
                        return e;
                    });
                    var chart = new CanvasJS.Chart("chartContainer1-1", {
                        title: {
                            text: "Thống kê các ngày trong tuần"
                        },
                        animationEnabled: true,
                        axisY: {
                            valueFormatString: "0 ₫",
                            interlacedColor: "#F5F5F5",
                            gridColor: "#D7D7D7",
                            tickColor: "#D7D7D7"
                        },
                        legend: {
                            verticalAlign: "bottom",
                            horizontalAlign: "center"
                        },
                        theme: "theme2",
                        data: [

                            {
                                type: "column",
                                // showInLegend: true,
                                // legendMarkerColor: "grey",
                                // legendText: "MMbbl = one million barrels",
                                dataPoints: data
                            }
                        ]
                    });
                    chart.render();
                    tabIndex = 0;
                });
            };
            let time = self.toDate.getTime() - self.fromDate.getTime();
            time = time / 1000 / 60 / 60 / 24;
            if (time <= 31) {
                Transaction.statisticByDate(self.fromDate.getTime(), self.toDate.getTime()).then((res) => {
                    drawChart('Thống kê tiền bán theo ngày', 'Tiền bán hàng trong ngày', 'DD-MM', res);
                });
            } else if (time / 30 <= 12) {
                Transaction.statisticByMonth(self.fromDate.getTime(), self.toDate.getTime()).then((res) => {
                    drawChart('Thống kê tiền bán theo tháng', 'Tiền bán hàng trong tháng', 'MMM, YYYY', res);
                });
            } else {
                Transaction.statisticByYear(self.fromDate.getTime(), self.toDate.getTime()).then((res) => {
                    drawChart('Thống kê tiền bán theo năm', 'Tiền bán hàng trong năm', 'YYYY', res);
                });
            }
        }
        this.$routerOnActivate = (next) => {
            // self.chartMoneyByTime();
        }
    }]
});