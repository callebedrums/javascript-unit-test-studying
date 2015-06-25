

define(['app/second'], function (second) {
	'use strict';

	second.controller('firstCtrl', ['$scope', function ($scope) {
		$scope.color = 'black';
		$scope.add = function (a, b) {
			if(isNaN(a) || isNaN(b) || a === null || b === null) throw 'you should pass two numbers as parameters';
			return a + b;
		};
		$scope.method = function (param) {
			if(param === 'b') return 1;
			if(param === 'a') return 0;
			return -1;
		};
	}]);
});
