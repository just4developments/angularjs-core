window.app = angular.module('myApp', [
		'ngRoute'
	])
	.constant('$config', {
		apiUrl: 'http://localhost:4000',
	})
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
	.run(['$rootScope', '$timeout', '$http', '$window', function ($rootScope, $timeout, $http, $window) {

	}])
	.config(['$locationProvider', '$routeProvider', '$config', '$httpProvider', function ($locationProvider, $routeProvider, $config, $httpProvider) {
		//$locationProvider.hashPrefix('!');    
		// $httpProvider.interceptors.push('AuthInterceptor');
		$locationProvider.html5Mode(true);
		for (var i in window.routes) {
			 $routeProvider.when(i, window.routes[i]);
		}
	}])

.run(['$rootScope', '$location', function ($rootScope, $location) {
	// $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
	//   $rootScope.title = current.$$route.title;
	//   $rootScope.navicon = current.$$route.originalPath;
	//   delete $rootScope.onNavEvent;
	// });
}])

;