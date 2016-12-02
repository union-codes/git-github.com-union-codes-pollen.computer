angular
  .module('app')
  .controller('newsCtrl', ['$scope', function($scope) {
    $scope.title = "NEWS";
    $scope.items = ['home','work','about','news','contact',];
    $scope.selectedValue = 'news';

  
  }]);