'use strict';

angular.module('donaldmcdougalApp').config(['$routeProvider',
    function ($routeProvider) {
	    $routeProvider
		    .when('/about', {
	            templateUrl: 'views/about.html',
	            controller: 'AboutController'
	        });    
}]);
