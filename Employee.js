angular.module('Employee', [
	'ngStorage'
])
.controller('EmployeeCtrl', function($scope, $localStorage,  $sessionStorage) {	
	$scope.$storage = $localStorage;
	$scope.defaultSelect = true;
	//$scope.$storage.EmployeeList ='[]';
	$scope.newEmployeeString = '';
	$scope.parsedEmployeeList = JSON.parse($scope.$storage.EmployeeList);
	$scope.$session = $sessionStorage;
	$scope.$session.editEmployee = false;
	var index;
	$scope.newEmployee = {
						  //"id": $scope.parsedEmployeeList.length,
						  "firstName": '',
						  "lastName": '',
						  "middleInitial": '',
						  "department": '',
						  "email": '',
						  "skype": '',
						  "jobtitle": '',
						  };
						  
	
	
	$scope.JobTitles = [
		{"id": 0, "name": "Winner", "description": "Hero"},
		{"id": 1, "name": "Loser", "description": "Zero"},
	];
	
	$scope.Departments = [
		{"id": 0, "name": "Big House", "parent": "n/a"},
		{"id": 1, "name": "Small House", "parent": "Big House"},
	];
	
	
	function resetEmployeeForm() {
		$scope.newEmployee = {
			//id: $scope.parsedEmployeeList.length,
			firstName: '',
			lastName: '',
			middleInitial: '',
			department: 'Select Department',
			email: '',
			skype: '',
			jobtitle: 'Select Jobtitle'
			
		};
		
		$scope.defaultSelect = true;
		
	}
	
	function createEmployee() {
		//$scope.newEmployeeString = $scope.newEmployee;
		if ($scope.$session.editEmployee == false){
			$scope.parsedEmployeeList.push(jQuery.extend(true, {}, $scope.newEmployee ));
		}
		else {
			$scope.parsedEmployeeList[index] = $scope.newEmployee;
			$scope.$session.editEmployee = false;
		}
		$scope.$storage.EmployeeList =  JSON.stringify($scope.parsedEmployeeList);
		//$scope.parsedEmployeeList.push($scope.newEmployeeString);
		//$scope.$storage.EmployeeList = $scope.parsedEmployeeList;
		//console.log($scope.$storage.EmployeeList);
		resetEmployeeForm();
	}
	
	function cancelCreating() {
		if (confirm("Do you want to cancel?")){
			console.log("reset");
			console.log($scope.$storage.EmployeeList);
			resetEmployeeForm();
		};
	}
	
	function editEmployee(item){
		index = $scope.parsedEmployeeList.indexOf(item);
		$scope.newEmployee = jQuery.extend(true, {}, item );
		$scope.$session.editEmployee = true;

	}
	
	function deleteEmployee(item){
		//console.log(item);
		if (confirm("Do you want to delete this employee?")){
			index = $scope.parsedEmployeeList.indexOf(item);
			$scope.parsedEmployeeList.splice(index, 1); 
			$scope.$storage.EmployeeList =  JSON.stringify($scope.parsedEmployeeList);		
			resetEmployeeForm();
		}	;	
	}
	$scope.deleteEmployee = deleteEmployee;
	$scope.editEmployee = editEmployee;
	$scope.cancelCreating = cancelCreating;
	$scope.createEmployee = createEmployee;

})
;

