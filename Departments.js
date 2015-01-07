angular.module('Department', [
	'ngStorage'
])
.controller('DepartmentCtrl', function($scope, $localStorage, $sessionStorage) {	
	$scope.$storage = $localStorage;
	$scope.defaultSelect = true;
	if ($scope.$storage.DepartmentList == null){$scope.$storage.DepartmentList ='[]'};
	$scope.newDepartmentString = '';
	$scope.parsedDepartmentList = JSON.parse($scope.$storage.DepartmentList);
	console.log($scope.parsedDepartmentList);
	$scope.$session = $sessionStorage;
	$scope.$session.editDepartment = false;
	var index;
	
	$scope.newDepartment = {
		name: '',
		parent: ''
	};
		
	function resetDepartmentForm() {
		$scope.newDepartment = {
		name: '',
		parent: ''
		};
		$scope.defaultSelect =  true;
		
	}
	
	function createDepartment(newDepartment) {
		if ($scope.$session.editDepartment == false){
			$scope.parsedDepartmentList.push(jQuery.extend(true, {}, $scope.newDepartment ));
		}
		else {
			$scope.parsedDepartmentList[index] = $scope.newDepartment;
			$scope.$session.editDepartment = false;
		}
		$scope.$storage.DepartmentList =  JSON.stringify($scope.parsedDepartmentList);
		console.log($scope.newDepartment);
		resetDepartmentForm();
	}
	
	function cancelCreating() {
		if (confirm("Do you want to cancel?")){
			resetDepartmentForm();
		}
	}
	
	function editDepartment(item){
		index = $scope.parsedDepartmentList.indexOf(item);
		$scope.newDepartment = jQuery.extend(true, {}, item );
		$scope.$session.editDepartment = true;
	}
	
	function deleteDepartment(item){
		if (confirm("Do you want to delete this department?")){
			index = $scope.parsedDepartmentList.indexOf(item);
			$scope.parsedDepartmentList.splice(index, 1); 
			$scope.$storage.DepartmentList =  JSON.stringify($scope.parsedDepartmentList);		
			resetDepartmentForm();
		}	;	
	}
	
	$scope.editDepartment = editDepartment;
	$scope.deleteDepartment = deleteDepartment;
	$scope.cancelCreating = cancelCreating;
	$scope.createDepartment = createDepartment;

})
;

