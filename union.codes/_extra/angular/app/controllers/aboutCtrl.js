angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.title = "About";
    $scope.items = ['home','work','about','news','contact',];
    $scope.selectedValue = 'about';
  }]);