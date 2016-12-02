angular
  .module('app')
  .controller('workCtrl', ['$scope', function($scope) {
    $scope.title = "Work";
    $scope.items = ['home','work','about','news','contact',];
    $scope.selectedValue = 'work';

  
  }]);