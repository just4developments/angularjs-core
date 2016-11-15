require('./my-app.css');
module.exports = {
    name: 'myApp',
    template: require('./my-app.html'),
    $routeConfig: [
        {path: '/product-list', name: 'ProductList', component: 'productList', useAsDefault: true},
        {path: '/test', name: 'Plugin Form', component: 'test'}
    ]
}
