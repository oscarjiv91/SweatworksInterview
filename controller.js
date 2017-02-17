angular.module('test', [])
.controller('testController', ['$scope', function($scope) {

	$scope.numbersList = []

	$scope.generateArray = function(){
		$scope.numbersList = []
		if($scope.minNumber > $scope.maxNumber){
			$scope.message = "Min number is higher than Max number. Try again."
		}else{
			$scope.message = null
			for(x = $scope.minNumber; x <= $scope.maxNumber; x++){
				$scope.numbersList.push(x)
			}
		}
	}

	$scope.filterByOption = function(item){
		switch ($scope.option) {
			case "EVEN":
				return item % 2 ? null : item
			case "ODD":
				return item % 2 ? item : null
			default:
				return item
		}
	}
}])

.directive('numbers', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div ng-repeat="number in numbersList | filter: filterByOption"> {{number}} </div>'
  };
});
