require('./my-app.css');
module.exports = {
    name: 'myApp',
    template: require('./my-app.html'),
    $routeConfig: [
        { path: '/', name: 'Execute Logs', component: 'exeLogs', useAsDefault: true },
        { path: '/plugin-form', name: 'Plugin Form', component: 'pluginForm' },
        { path: '/upload-package', name: 'Upload Package', component: 'uploadPackage' }
    ]
}