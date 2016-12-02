angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['home','work','about','news','contact',];
    $scope.selectedValue = 'home';

  
  }]);