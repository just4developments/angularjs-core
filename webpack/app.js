require('../public/index.htm');

require.ensure(['../public/css/1.font.css',
	'../public/css/2.material-font.css',
	'../public/css/3.material.min.css',
	'../public/css/4.angularjs-datetime-picker.css'], (require) => {
    require(['../public/css/1.font.css',
	'../public/css/2.material-font.css',
	'../public/css/3.material.min.css',
	'../public/css/4.angularjs-datetime-picker.css']);
})

require(['../public/js/0.lodash.min.js',
	'../public/js/1.angular.min.js',
	'../public/js/2.angular-animate.min.js',
	'../public/js/2.angular-aria.min.js',
	'../public/js/2.angular-messages.min.js',
	'../public/js/2.angular.scroll.min.js',
	'../public/js/2.angular_1_router.min.js',
	'../public/js/3.material.min.js',
	'../public/js/5.ng-file-upload-shim.min.js',
	'../public/js/6.ng-file-upload.min.js',
	'../public/js/7.angularjs-datetime-picker.min.js',
	'../public/js/9.canvasjs.min.js',
	'../public/js/9.ngFacebook.js'], (require) => {
    require(['../public/components/1.index.js',
		'../public/components/2.cuz.filter.js',
		'../public/components/3.cuz.directive.js',
		'../public/components/data.provider.js',
		'../public/components/my-app.js',
		'../public/components/admin/formular.js',
		'../public/components/admin/statistic.js',
		'../public/components/admin/transaction.js',
		'../public/components/common/upload.js',
		'../public/components/home/aboutus.js',
		'../public/components/home/banner.js',
		'../public/components/home/home.js',
		'../public/components/home/product-hot.js',
		'../public/components/home/product.js',
		'../public/components/static/policy.js'], (require) => {
        require([]);
    });
})