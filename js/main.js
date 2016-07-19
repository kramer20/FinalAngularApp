// (function() {
//     'use strict';
//     angular
//         .module('games', ['ui.router','backand'])
//         .config(function($stateProvider, $urlRouterProvider, BackandProvider) {


// 		      BackandProvider.setAppName('inclasstestingapp');
// 		      BackandProvider.setSignUpToken('38b3c98e-6e39-4eb4-9a53-353c5eccdccb');
// 		      BackandProvider.setAnonymousToken('3616a886-e4a7-4edc-99d7-6433678e47fe');

// 	  	$urlRouterProvider.otherwise("/");

// 	  	$stateProvider
// 	    .state('home', {
//       	url: '/',
//       	views: {
//       		'main': {
// 		        templateUrl: '../views/home.html',
// 		        controller: 'MainController',
// 		        controllerAs: 'controller'
// 		      }
// 		  },
// 	    })
// 	})

//         filter('to_trusted', ['$sce', function($sce){
//         return function(text) {
//             return $sce.trustAsHtml(text);
//         };
//     }])
//     .filter('cut', function () {
//         return function (value, wordwise, max, tail) {
//             if (!value) return '';

//             max = parseInt(max, 10);
//             if (!max) return value;
//             if (value.length <= max) return value;

//             value = value.substr(0, max);
//             if (wordwise) {
//                 var lastspace = value.lastIndexOf(' ');
//                 if (lastspace != -1) {
//                   //Also remove . and , so its gives a cleaner result.
//                   if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
//                     lastspace = lastspace - 1;
//                   }
//                   value = value.substr(0, lastspace);
//                 }
//             }

//             return value + (tail || '............');
//         };
//     });
// })();


