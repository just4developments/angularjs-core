require('../public/index.htm');

require.ensure(['../public/css/1.font.css',
	'../public/css/2.material-font.css',
	'../public/css/3.material.min.css',
	'../public/css/4.angularjs-datetime-picker.css',
	'../public/css/5.styles.css'], (require) => {
    require(['../public/css/1.font.css',
	'../public/css/2.material-font.css',
	'../public/css/3.material.min.css',
	'../public/css/4.angularjs-datetime-picker.css',
	'../public/css/5.styles.css']);
})

require(['../public/js/1.angular.min.js',
	'../public/js/2.angular-route.min.js',
	'../public/js/3.angular-animate.min.js',
	'../public/js/4.angular-touch.min.js',
	'../public/js/5.ng-file-upload-shim.min.js',
	'../public/js/6.ng-file-upload.min.js',
	'../public/js/7.angularjs-datetime-picker.min.js'], (require) => {
    require(['../public/components/0.route.js',
		'../public/components/1.index.js',
		'../public/components/2.cuz.filter.js',
		'../public/components/3.cuz.directive.js',
		'../public/components/data.provider.js',
		'../public/components/plugin/plugin-form.js',
		'../public/components/plugin/plugin-list.js'], (require) => {
        require(['../public/js/8.[DONE].material.min.js']);
    });
})