var myApp = angular.module("myApp", []);

myApp.controller('myShoppingCart', function($scope) {
$scope.selecteditem = [];
$scope.selection = false;
 $scope.products = [];
 $scope.totalbill = 0;
 $scope.itemname = [{
 	name: "Expresso",
 	price: 200
 },
 {
 	name: "Latte",
 	price: 250
 },
 {
 	name: "fg",
 	price: 100
 },
 {
 	name: "Americano",
 	price: 300
 },
 {
 	name: "Mocha",
 	price: 50
 }]


 $scope.addselecteditem = function(selectItem, selectionstatus){
 	if (selectionstatus == true) { 		
 		$scope.selecteditem.push(selectItem);
 	}else {
 		for(var l = 0; l< $scope.selecteditem.length; l++) {
 			if ($scope.selecteditem[l].name == selectItem.name) {
 				$scope.selecteditem.splice(l,1);
 				break;
 			}
 		}
 	}
 }

 $scope.calculatebill = function (){
 	$scope.totalbill = 0;
 	if ($scope.selecteditem.length) {
 		for(var j =0; j < $scope.selecteditem.length; j++){
 		$scope.totalbill += $scope.selecteditem[j].price;
 	}
 	}
 }


 $scope.sortAscinding = function() {
 	for(var i = 0; i < $scope.itemname.length; i++){
		$scope.itemname.sort(function(a,b) { 
		return ((a.price) - (b.price))
	});
		console.log($scope.itemname);
	}

 }
 $scope.sortDescending = function() {
 	for(var i = 0; i < $scope.itemname.length; i++){
		$scope.itemname.sort(function(a,b) { 
		return ((b.price) - (a.price))
	});
		console.log($scope.itemname);
	}
 }  
});