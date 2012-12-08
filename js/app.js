// Generated by CoffeeScript 1.3.3
/*
 App module
*/

angular.module('sushi', []).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when("/sushi", {
      templateUrl: 'templates/partials/sushi-list.html',
      controller: ProductListController
    }).when("/sushi/:sushiId", {
      templateUrl: 'templates/partials/sushi-detail.html',
      controller: ProductDetailController
    }).otherwise({
      redirectTo: "sushi"
    });
  }
]);