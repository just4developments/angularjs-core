require('./my-app.css');
app.component('myApp', {
    template: require('./my-app.html'),
    $routeConfig: [
        {path: '/product-list', name: 'ProductList', component: 'productList', useAsDefault: true}
    ]
});
