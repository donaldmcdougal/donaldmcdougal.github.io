'use strict';

angular.module('donaldmcdougalApp').config(['$routeProvider',
    function ($routeProvider) {
	    $routeProvider
		    .when('/', {
	            templateUrl: 'views/main.html',
	            controller: 'MainController'
	        });    
}]);
