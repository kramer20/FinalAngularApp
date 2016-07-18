(function() {
    'use strict';
    
    angular
    .module('starter')
	.directive('new', function (API) {
	  return {
	    restrict: 'E',
	    scope:[],
	    template:"",
	    link: function (scope, element, attrs) { 
	    	var vm = scope;
	    }
	  };
	})
})();
