'use strict';

/**
 * @ngdoc function
 * @name prj03App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prj03App
 */
angular.module('prj03App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
