

angular.module('starter.controllers', [])



.controller('ChatsCtrl', function($scope, Chats, $ionicSlideBoxDelegate, $window, $ionicGesture, $http, $timeout, $ionicBackdrop, $ionicModal, $ionicTabsDelegate,  $ionicScrollDelegate, $state) {
   




    // navigator.splashscreen.hide(); 





  $scope.allImages=JSON.parse(window.localStorage.getItem('savedFeeds'));

    $ionicSlideBoxDelegate.update();


var onWhichSlide=0;
var limitOfPosts=10;





var startingIndex;
var endingIndex;
var long_live_access_token='';

var access_token='EAANhZARaQ2dEBAM1mB1ZATYcswgTD9fcHH08F0ZBQdw45hz6YbfAxP1aUf0X7ijz2kagvvxJZB6Fre6xkGk4VEmWSVW3pa4AVOBelziegsKvGCi1CPXyZBZAxOp7UiD6l7fFN9yZBuZASImZCQZCE0oQtQ8hhBImh9F3UZD';

access_token=window.localStorage.getItem("savedAccessToken");

if (access_token=='' || access_token==null || access_token=='null') 
{
	access_token='EAANhZARaQ2dEBAM1mB1ZATYcswgTD9fcHH08F0ZBQdw45hz6YbfAxP1aUf0X7ijz2kagvvxJZB6Fre6xkGk4VEmWSVW3pa4AVOBelziegsKvGCi1CPXyZBZAxOp7UiD6l7fFN9yZBuZASImZCQZCE0oQtQ8hhBImh9F3UZD';
	window.localStorage.setItem("savedAccessToken", access_token);
}



      $http.get("https://graph.facebook.com/v2.8//thoughtstheories/posts?fields=full_picture&include_hidden=true&limit="+limitOfPosts+"&access_token="+access_token)
        .then(function(response) {
            $scope.allImages=response.data.data;
            $ionicSlideBoxDelegate.update();

              window.localStorage.setItem("savedFeeds", JSON.stringify(response.data.data));

            console.log(response.data.data);
        });


 


  







    // on-swipe-left="onSwipeLeft()"
  



    $scope.slideChanged=function()
    {
      onWhichSlide=$ionicSlideBoxDelegate.currentIndex();
    }








    $scope.onSwipeLeft=function()
    {
      console.log(onWhichSlide +' ypypyp ' + limitOfPosts );
      if (onWhichSlide==(limitOfPosts/2)) 
      {
        limitOfPosts+=10;
        $http.get("https://graph.facebook.com/v2.8//thoughtstheories/posts?fields=full_picture&include_hidden=true&limit="+limitOfPosts+"&access_token="+access_token)
          .then(function(response) {
              $scope.allImages=response.data.data;
            	$ionicSlideBoxDelegate.update();

              console.log(response.data.data);

              window.localStorage.setItem("savedFeeds", JSON.stringify(response.data.data));
          });

      }       
    }




    $scope.shareIt = function() {
        var message = 'Download *Thoughts & Theories* Android App                                        ';
        var imageSource = $scope.allImages[onWhichSlide].full_picture;
        var shareLink = 'https://play.google.com/store/apps/details?id=com.anupkumarpanwar.thoughtsandtheories';
        window.plugins.socialsharing.share(message, 'Thoughts & Theories', imageSource, shareLink);
    };









    $scope.Height = $window.innerHeight - 30;
    





});