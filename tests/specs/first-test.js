
define(['lib/angular-mocks', 'app/first'], function (ng, first) {
	'use strict';

	describe('first test', function () {
		var firstCtrl;
		var $scope;

		beforeEach(module('second'));

		beforeEach(inject(function ($controller) {
			$scope = {};
			firstCtrl = $controller('firstCtrl', { $scope: $scope });
		}));

		it('should define a color property', function () {
			assert.isDefined($scope.color, '$scope.color not defined');
		});

		it('should set the color property to black', function () {
			expect($scope.color).to.be('black');
		});
	});
});