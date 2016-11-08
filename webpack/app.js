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
	'../public/js/2.angular-animate.min.js',
	'../public/js/2.angular-aria.min.js',
	'../public/js/2.angular-messages.min.js',
	'../public/js/2.angular_1_router.min.js',
	'../public/js/3.material.min.js',
	'../public/js/5.ng-file-upload-shim.min.js',
	'../public/js/6.ng-file-upload.min.js',
	'../public/js/7.angularjs-datetime-picker.min.js'], (require) => {
    require(['../public/components/1.index.js',
		'../public/components/2.cuz.filter.js',
		'../public/components/3.cuz.directive.js',
		'../public/components/data.provider.js',
		'../public/components/my-app.js',
		'../public/components/common/upload.js',
		'../public/components/plugin/plugin-form.js',
		'../public/components/product/product-list.js'], (require) => {
        require([]);
    });
})