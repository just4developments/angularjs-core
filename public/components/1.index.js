window.app = angular.module('myApp', [
		'ngMaterial',
		'ngComponentRouter',
		'duScroll',
		'ngFacebook'
	])
	.constant('$config', {
		// apiUrl: 'http://localhost:9000',
		apiUrl: 'http://api.nanacloset.com',
		webUrl: 'http://nanacloset.com'
	})
	.value('$routerRootComponent', 'myApp')
	.config(['$locationProvider', '$config', '$httpProvider', '$compileProvider', '$mdAriaProvider', function ($locationProvider, $config, $httpProvider, $compileProvider, $mdAriaProvider) {
		//$locationProvider.hashPrefix('!');    
		// $httpProvider.interceptors.push('AuthInterceptor');
		$mdAriaProvider.disableWarnings();
		$compileProvider.debugInfoEnabled(false);
		$locationProvider.html5Mode(true);				
	}])
	.config(['$facebookProvider', function ($facebookProvider) {
		$facebookProvider.setAppId(1010798415647065);
		$facebookProvider.setVersion("v2.5");
		$facebookProvider.setCustomInit({
			xfbml      : true
		});
	}])	
	.run(['$rootScope', '$location', '$config', 'Category', '$window', '$mdMedia', '$http', 'FacebookLoader', function ($rootScope, $location, $config, Category, $window, $mdMedia, $http, FacebookLoader) {
		$rootScope.config = $config;
		$rootScope.userID = $window.localStorage.userId;
		if($window.localStorage.isAuth){
			$rootScope.isAuth = $window.localStorage.isAuth;
			$http.defaults.headers.common.IsNana = $rootScope.isAuth;
		}
		$rootScope.deviceCss = $mdMedia('xs') ? 'xs' : ($mdMedia('sm') ? 'sm' : 'md');
		$rootScope.$on('fb.load', function (event, data) {
			$window.isFbLoaded = true;			
			setTimeout(function() {
				FacebookLoader.load();
			});     
		});		
	}])
	.run([function(){
		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/vi_VN/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
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