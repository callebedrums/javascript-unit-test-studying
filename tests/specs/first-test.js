
define(['lib/angular-mocks', 'app/first'], function (ng, first) {
	'use strict';

	describe('firstCtrl', function () {
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
			expect($scope.color).to.equal('black');
		});

		describe('.add()', function () {

			it('should sum two numbers', function () {
				expect($scope.add(1, 2)).to.equal(3);
			});

			it('should throw an error when one or both params are missed or are NaN', function () {
				assert.throw(function () {
					$scope.add();
				}, 'you should pass two numbers as parameters');
				assert.throw(function () {
					$scope.add(1);
				}, 'you should pass two numbers as parameters');
				assert.throw(function () {
					$scope.add(undefined, 1);
				}, 'you should pass two numbers as parameters');
				assert.throw(function () {
					$scope.add(undefined, null);
				}, 'you should pass two numbers as parameters');
				assert.throw(function () {
					$scope.add('a', 1);
				}, 'you should pass two numbers as parameters');
				assert.throw(function () {
					$scope.add(1, 'a');
				}, 'you should pass two numbers as parameters');
			});
		});

		describe('.method()', function () {

			it('should return 0 when param is a', function () {
				expect($scope.method('a')).to.equal(0);
			});

			it('should return 1 when param is b', function () {
				expect($scope.method('b')).to.equal(1);
			});

			it('should return -1 when param not is a or b', function () {
				expect($scope.method('c')).to.equal(-1);
			});
		});
	});
});