// http://livedemo00.template-help.com/prestashop_55246/
require('./my-app.scss');
app.component('myApp', {
    template: require('./my-app.html'),
    $routeConfig: [
        {path: '/', name: 'Home', component: 'home', useAsDefault: true}
    ]
});
