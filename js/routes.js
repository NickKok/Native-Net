angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('welcome', {
    url: '/page1',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('english', {
    url: '/page2',
    templateUrl: 'templates/english.html',
    controller: 'englishCtrl'
  })

  .state('services', {
    url: '/page3',
    templateUrl: 'templates/services.html',
    controller: 'servicesCtrl'
  })

  .state('campsInfo', {
    url: '/page4',
    templateUrl: 'templates/campsInfo.html',
    controller: 'campsInfoCtrl'
  })

  .state('learnGreek', {
    url: '/page5',
    templateUrl: 'templates/learnGreek.html',
    controller: 'learnGreekCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});