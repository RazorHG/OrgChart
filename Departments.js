angular.module('Department', [
	'ngStorage'
])
.controller('DepartmentCtrl', function($scope, $localStorage) {	
	$scope.$storage = $localStorage;
	$scope.defaultSelect = true;
	//$scope.$storage.DepartmentList ='[]';
	$scope.newDepartmentString = '';
	$scope.parsedDepartmentList = JSON.parse($scope.$storage.DepartmentList);
	$scope.$session = $sessionStorage;
	$scope.$session.editDepartment = false;
	var index;
	
	$scope.newDepartment = {
		name: '',
		parent: ''	
	};
	$scope.Departments = [
		{"id": 0, "name": "Big House", "parent": "n/a"},
		{"id": 1, "name": "Small House", "parent": "Big House"},
	];
		
	function resetDepartmentForm() {
		$scope.newJobTitle = {
			name: '',
			parent: '',		
		};
	}
	
	function createDepartment(newDepartment) {
		console.log("create");
	}
	
	function cancelCreating() {
		console.log("reset");
		resetDepartmentForm();
	}
	
	$scope.cancelCreating = cancelCreating;
	$scope.createDepartment = createDepartment;

})
;

