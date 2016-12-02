angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/home.html',
        controller: 'homeCtrl'
      })
      .state('work', {
        url: '/work',
        templateUrl: 'app/templates/work.html',
        controller: 'aboutCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/templates/about.html',
        controller: 'aboutCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'app/templates/news.html',
        controller: 'newsCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/templates/contact.html',
        controller: 'contactCtrl'
      })
  }])