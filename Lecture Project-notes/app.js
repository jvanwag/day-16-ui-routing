angular.module('app1', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

    $stateProvider
          .state('list', {
            url: '/list',
            controller: 'listCtrl' ,
            templateUrl: 'list-tmpl.html'
          })

});
