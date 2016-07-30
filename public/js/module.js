angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'html/home.html'
})
  .state('second', {
    url: '/second',
    templateUrl: 'html/second.html'
  })

$urlRouterProvider.otherwise('/second')
})
