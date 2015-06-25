

define(['app/second'], function (second) {
	'use strict';

	second.controller('firstCtrl', ['$scope', function ($scope) {
		$scope.color = 'black';
		$scope.add = function (a, b) {
			return a + b;
		};
	}]);
});
