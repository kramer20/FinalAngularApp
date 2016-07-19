(function() {
    'use strict';
    angular
        .module('games', ['ui.router','backand'])
        .config(function($stateProvider, $urlRouterProvider, BackandProvider) {


		      BackandProvider.setAppName('partystarters');
		      BackandProvider.setSignUpToken('7954a5f3-35b7-495c-a763-712f09709704');
		      BackandProvider.setAnonymousToken('81c97473-0cea-482c-a680-d6873c29567b');

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
      .state('favorite', {
        url: '/favorite',
        views: {
          'main': {
            templateUrl: '../views/favorite.html',
            controller: 'FavoriteController',
            controllerAs: 'controller'
          },
           'nav': {
            templateUrl: '../views/partials/nav.html',
          },
        },
       }) 
       .state('detail', {
        url: '/detail/:gamesid',
        views: {
          'main': {
            templateUrl: '../views/detail.html',
            controller: 'DetailController',
            controllerAs: 'controller'
          },
           'nav': {
            templateUrl: '../views/partials/nav.html',
          },
        },
       }) 
       .state('add', {
        url: '/add',
        views: {
          'main': {
            templateUrl: '../views/add.html',
            controller: 'AddController',
            controllerAs: 'controller'
          },
           'nav': {
            templateUrl: '../views/partials/nav.html',
          },
        },
       })  

	})

        .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                  //Also remove . and , so its gives a cleaner result.
                  if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || '............');
        };
    });
})();


