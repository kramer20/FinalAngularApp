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

                  var results = results.data.data;

                  //if else statement to filter only favorited items
                  // results = results.filter(function(item){
                  //       if (item.favorited > 0){
                  //         return true;
                  //       }
                  // })

                  vm.games = results;

                
               })
          }       
        
    showInfo();
	      
    });
})();