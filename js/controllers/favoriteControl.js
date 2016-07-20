(function() {
    'use strict';
    
    angular
    .module('games')
    .controller('FavoriteController', function(back,$stateParams) {
       var vm = this;

       		var showInfo = function(){
           var showGames = back.getGames();

               showGames.then(function(results){
                  console.log(results);
                  vm.games = results.data.data;

                  
               })
          }       
        
    showInfo();
	      
    });
})();