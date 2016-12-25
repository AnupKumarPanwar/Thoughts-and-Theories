
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    // setTimeout(function(){navigator.splashscreen.hide();},3000) 
    navigator.splashscreen.show();
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      Keyboard.disableScrollingInShrinkView(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      // StatusBar.styleDefault();
      StatusBar.overlaysWebView(true); // let status bar overlay webview

      StatusBar.backgroundColorByHexString('#010101'); // set status bar to white
    }
  document.addEventListener("deviceready", function onDeviceReady(w) {
    // Should work on Andriod
    if(StatusBar && statusbarTransparent) {
        // Enable translucent statusbar
        statusbarTransparent.enable();

        // Get the bar back
        StatusBar.show();
    }
    // iOS only
    else if (StatusBar) {
        // Get the bar back
        StatusBar.show();
    }
    // navigator.splashscreen.hide(); 
    
}, false);
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider

  .state('chats', {
      url: '/chats',
      views: {
        '': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        },
		'b': {
        templateUrl: 'templates/chats.html',
        controller: 'chats1Ctrl'
      }
      }
   
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/chats');

});
