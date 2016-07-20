(function () {
	'use strict';
	angular
		.module('games')
		 .factory('back', function($http,Backand) {


		 	
		 	function getGames(){
		        var gettingGames = $http({
		          method: 'GET',
		          url: 'https://api.backand.com:443/1/objects/games',
		          });

		        return gettingGames;
   			}

   			function getSingle(id){
		        var getDetails = $http({
		          method: 'GET',
		          url: 'https://api.backand.com:443/1/objects/games/'+id,
		          });

		        return getDetails;
   			}

   			function favoriteGame(id,favorites){
   				var data = {
   					favorited: parseInt(favorites)+1,
   				}

   				var favoritingGame = $http({
		          method: 'PUT',
		          data: data,
		          url: 'https://api.backand.com:443/1/objects/games/'+id,
		          });

		        return favoritingGame;
		    }  
   			

		  //   var searchData = function(search)
		  //   {
		  //   	var data = $http ({
				//   method: 'GET',
				//   url: "https://api.backand.com:443/1/objects/blogs?search="+search,
				// });

				// return data;

		  //   }

		    function postGame(data){
		 	
		 		var makingGame = $http({
				  method: 'POST',
				  data:data,
				  url: 'https://api.backand.com:443/1/objects/games',
				});

				return makingGame;

		 	}

		 	// var getSingleBlog = function(data)
		 	// {
		 	// 	var gettingData = $http({
				//   method: 'GET',
				//   url: Backand.getApiUrl() + '/1/objects/blogs/'+data
				// });

				// return gettingData;
		 	// }

		 	
		 	return {
		 		// getList,
		 		// postBlog,
		 		// getSingleBlog,
		 		// searchData
		 		getGames:getGames,
		 		postGame:postGame,
		 		getSingle:getSingle,
		 		favoriteGame:favoriteGame,
		 	}

		 
		 });
})();