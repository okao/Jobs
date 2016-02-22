var app = angular.module("jobsite", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/main', {
    templateUrl: './views/main.html',
    controller: 'MainCtrl'
  }).
  when('/about', {
    templateUrl: './views/about.html',
    controller: 'MainCtrl'
  }).
  when('/services', {
    templateUrl: './views/services.html',
    controller: 'MainCtrl'
  }).
  when('/portfolio', {
    templateUrl: './views/portfolio.html',
    controller: 'MainCtrl'
  }).
  when('/blog', {
    templateUrl: './views/blog.html',
    controller: 'MainCtrl'
  }).
  when('/contact', {
    templateUrl: './views/contact.html',
    controller: 'MainCtrl'
  }).
  otherwise({redirectTo:'/main'})
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
	// $http.get('services.json').then(function (response){
 //    $scope.services = response.data;
 //  });
}]);
