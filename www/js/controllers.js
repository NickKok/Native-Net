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
     var myLatlng = new google.maps.LatLng(37.99187,23.73039);
      var myLat = new google.maps.LatLng(37.9911,23.73266);

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

     var contentString = '<div id="content">'+
           '<div id="siteNotice">'+
           '</div>'+
           '<h2 id="firstHeading" class="firstHeading">Caritas Day Centre for Refugee Families</h2>'+
           '<div id="bodyContent">'+
           '<p>Toiletries, hygiene, shampoo, soap, toothbrush, toothpaste, razer, gilette, deoderant, floss, mouthwash, sun cream, bug spray, toilet paper, wet wipes, pad, tampon</p>'+
           '</div>'+
           '</div>';

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




       var infowindow1 = new google.maps.InfoWindow({
         content: contentString
       });


     google.maps.event.addListener(marker, 'click', function() {
       infowindow1.open(map,marker);
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

     /*$scope.loading = $ionicLoading.show({
       content: 'Getting current location...',
       showBackdrop: false
     });*/

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
