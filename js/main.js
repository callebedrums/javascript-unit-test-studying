
(function () {
	'use strict';

	requirejs.config({
		baseUrl: 'js/',

		shim: {
			'lib/angular': { exports: 'angular'}
		}
	});
}) ();

requirejs('app/first'], function () {
	console.log('app boostrap');
});