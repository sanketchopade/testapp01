'use strict';

/**
 * @ngdoc function
 * @name prj03App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prj03App
 */
angular.module('prj03App')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

$scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

$scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
