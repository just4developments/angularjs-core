require('../public/index.htm');

require(['../public/assets/css/1.bootstrap.min.css',
		'../public/assets/css/2.font-awesome.min.css',
		'../public/assets/css/3.fonts.googleapis.com.css',
		'../public/assets/css/4.jquery.gritter.min.css',
		'../public/assets/css/a.ace.min.css']);

require(['jquery', 'angular', 'router', 'upload', 'socketio',
		'../public/assets/js/1.bootstrap.min.js',
		'../public/assets/js/2.jquery.gritter.min.js',
		'../public/assets/js/a.ace-elements.min.js',
		'../public/assets/js/b.ace.min.js'], (jquery, angular) => {
    global.app = angular.module('myApp', ['ngComponentRouter', 'ngFileUpload']).value('$routerRootComponent', 'myApp');
    require(['../public/components/app-const.js',
			'../public/components/app-config.js',
			'../public/components/app-run.js',
			'../public/components/app-directive.js',
			'../public/components/app-filter.js',
			'../public/components/app-provider.js',
			'../public/components/my-app.js',
			'../public/components/account/login.js',
			'../public/components/common/upload-file.js',
			'../public/components/demo/index.js',
			'../public/components/plugin/exe-logs.js',
			'../public/components/plugin/plugin-form.js',
			'../public/components/plugin/upload-package.js'], (...com) => {
        for (var i in com) {
            if (i == 0) global.app.constant('$config', com[i]);
            else if (i == 1) global.app.config(com[i]);
            else if (i == 2) global.app.run(com[i]);            
            else if (i == 3) for (var key in com[i]) global.app.directive(key, com[i][key]);
            else if (i == 4) for (var key in com[i]) global.app.filter(key, com[i][key]);
            else if (i == 5) for (var key in com[i]) global.app.factory(key, com[i][key]);
            else global.app.component(com[i].name, com[i]);
        }
    });
})