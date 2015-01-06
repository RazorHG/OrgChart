angular.module('Employee', [
	'ngStorage'
])
.controller('EmployeeCtrl', function($scope, $localStorage) {	
	$scope.newEmployee = {"firstName": '',
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
	
	$scope.departments = [
		{"id": 0, "name": "Big House"},
		{"id": 1, "name": "Small House"},
	];
	
	function resetEmployeeForm() {
		$scope.newEmployee = {
			firstName: '',
			lastName: '',
			middleInitial: '',
			department: 'Select Department',
			email: '',
			skype: '',
			jobtitle: 'Select Jobtitle'
			
		};
		
	}
	
	function createEmployee(newEmployee) {
		console.log("create");
	}
	
	function cancelCreating() {
		console.log("reset");
		resetEmployeeForm();
	}
	
	$scope.cancelCreating = cancelCreating;
	$scope.createEmployee = createEmployee;

})
;

