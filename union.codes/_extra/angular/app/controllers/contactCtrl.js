angular
  .module('app')
  .controller('contactCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
    $scope.items = ['home','work','about','news','contact',];
    $scope.selectedValue = 'contact';

  
  }]);