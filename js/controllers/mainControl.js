(function() {
    'use strict';
    
    angular
    .module('games')
    .controller('MainController', function(back) {
       var vm = this;

       vm.favoriteGame = function(game){
            var thumb = back.favoriteGame(game.id);

            thumb.then(function(response){
              console.log(response);
              // game.favorited ++;
            })
          }

       var showInfo = function(){
	       var showGames = back.getGames();

	       showGames.then(function(results){
	       		// var games = results.data.__metadata.title;
	       		console.log(results);
	       		vm.games = results.data.data;
	       })
		}       
      	
		showInfo();

    });
})();