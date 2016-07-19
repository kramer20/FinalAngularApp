(function() {
    'use strict';
    
    angular
    .module('games')
    .controller('AddController', function(back) {
       var vm = this;

       vm.submit = function(){
       	var createGame = back.postGame(vm.form);

       	createGame.then(function(response){
       		console.log(response);
          vm.form = "";
       	})
       }
      
    });
})();