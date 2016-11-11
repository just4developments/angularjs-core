require('./my-app.scss');
app.component('myApp', {
    template: require('./my-app.html'),
    $routeConfig: [
        {path: '/', name: 'Home', component: 'home', useAsDefault: true}
    ]
});
