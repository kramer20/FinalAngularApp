(function() {
    'use strict';
    
    angular
    .module('games')
    .controller('DetailController', function(back,$stateParams) {
       var vm = this;

       		var singleDeats = back.getSingle($stateParams.gamesid);

       		singleDeats.then(function(results){
       			vm.detail = results.data;
       		})
	      
    });
})();