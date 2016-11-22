window.app = angular.module('myApp', [
		'ngMaterial',
		'ngComponentRouter'
	])
	.constant('$config', {
		apiUrl: 'http://api.nanacloset.com'
		// apiUrl: 'http://localhost:9000'
	})
	.value('$routerRootComponent', 'myApp')
	.config(['$locationProvider', '$config', '$httpProvider', function ($locationProvider, $config, $httpProvider) {
		//$locationProvider.hashPrefix('!');    
		// $httpProvider.interceptors.push('AuthInterceptor');
		$locationProvider.html5Mode(true);
	}])
	.run(['$rootScope', '$location', '$config', 'Category', '$window', function ($rootScope, $location, $config, Category, $window) {
		$rootScope.config = $config;
		$rootScope.isAuth = $window.localStorage.isAuth;
		// $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		//   $rootScope.title = current.$$route.title;
		//   $rootScope.navicon = current.$$route.originalPath;
		//   delete $rootScope.onNavEvent;
		// });
	}])
	// .factory('AuthInterceptor', ['$q', '$window', function ($q, $window) {
	//   return {
	//     responseError: function (responseError) {
	//       if (responseError.status === 401) {
	//         $window.alert('Your session was expired.\nPlease re-login !')
	//         $window.location.href = "/login";
	//       } else if (responseError.status === 403) {
	//         $window.alert('You need login before use this function')
	//       } else if (responseError.status === 400) {
	//         $window.alert(responseError.data);
	//       }
	//       return $q.reject(responseError);
	//     }
	//   };
	// }])

;