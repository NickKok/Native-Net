angular.module('app.controllers', [])

.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('englishCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('servicesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('campsInfoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('learnGreekCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('DistributionMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicLoading, $compile,$cordovaGeolocation) {
  function initialize() {
     var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
      var myLat = new google.maps.LatLng(42.07493,-89.381388);

     var mapOptions = {
       center: myLatlng,
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById("map"),
         mapOptions);

     //Marker + infowindow + angularjs compiled ng-click
     /*var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
     var compiled = $compile(contentString)($scope);

     var infowindow = new google.maps.InfoWindow({
       content: compiled[0]
     });*/

     var marker = new google.maps.Marker({
       position: myLatlng,
       map: map,
       title: 'Marker'
     });
     var marker2 = new google.maps.Marker({
       position: myLat,
       map: map,
       title: 'Marker'
     });


     google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
     });

     google.maps.event.addListener(marker2, 'click', function() {
       infowindow.open(map,marker2);
     });

     $scope.map = map;
   }
   google.maps.event.addDomListener(window, 'load', initialize);

   $scope.centerOnMe = function() {
     if(!$scope.map) {
       return;
     }

     $scope.loading = $ionicLoading.show({
       content: 'Getting current location...',
       showBackdrop: false
     });

     navigator.geolocation.getCurrentPosition(function(pos) {
       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
       $scope.loading.hide();
     }, function(error) {
       alert('Unable to get location: ' + error.message);
     });
   };

   $scope.clickTest = function() {
     alert('Example of infowindow with ng-click')
   };






}])
