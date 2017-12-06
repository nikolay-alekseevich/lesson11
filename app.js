var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', function($scope) {
	$scope.priceTitle = 'Прайс-лист';
	$scope.priceDate = '2017-12-05';
	$scope.priceList = [{
		name: 'Апельсины',
		price: 2,
		discount: 0.1 
	}, {
		name: 'Яблоки',
		price: 1,
	}, {
		name: 'Бананы',
		price: 4,
		discount: 0.15
	}, {
		name: 'Персики',
		price: 3,
	}]
	$scope.priceOrder = 'name'

	$scope.setOrder = function(order){
		$scope.priceOrder = order;
	}

	$scope.sortReverse  = false;




}]);