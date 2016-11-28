var myApp = angular.module('MyApp', [])
     myApp.controller("myCtrl", function($scope){
		 $scope.message = "Hello, I wish You Happy Thanks Giving"
	 });
    myApp.filter('reverse', [function() {
        return function(string) {
            return string.split('').reverse().join('');
        };
    }]);