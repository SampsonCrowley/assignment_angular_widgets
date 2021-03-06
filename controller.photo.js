/* globals widgets */
widgets.controller("PhotoCtrl",
  ['$scope',
    function($scope, $photoFilter){
      $scope.rawFeed = instagramResponse;
      $scope.images = $scope.rawFeed.data;

      $scope.showData = function showData(image) {
        image.visible = true;
      };

      $scope.hideData = function hideData(image) {
        image.visible = false;
      }

      $scope.getFilters = function getFilters(){
        var filters = {}
        for(var i = 0; i < $scope.images.length; i++){
          filters[$scope.images[i].filter] = "";
        }
        var filterArray = [''];
        for(var filter in filters){
          filterArray.push(filter);
        }
        return filterArray;
      };

      $scope.getHashtags = function getHashtags(){
        var hashtags = {}
        for(var i = 0; i < $scope.images.length; i++){
          for(var h = 0; h < $scope.images[i].tags.length; h++){
            hashtags[$scope.images[i].tags[h]] = "";
          }
        }
        var hashtagArray = [''];
        for(var hashtag in hashtags){
          hashtagArray.push(hashtag);
        }
        return hashtagArray;
      };

      $scope.filters = $scope.getFilters();
      $scope.hashtags = $scope.getHashtags();
      $scope.filterFilter = "";

      $scope.setFilterFilter = function(filter) {
        $scope.filterFilter = filter;
      }

      $scope.setHashtagFilter = function(filter) {
        $scope.hashtagFilter = filter;
      }
    }
  ]
)
