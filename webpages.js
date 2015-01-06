angular.module('Template', [
	'ngStorage'
])
.controller('TemplateCtrl', function($scope, $localStorage) {	
	$scope.tabs = [
		{"id": 0, "name": "Main Page", "url": "index.html" },
		{"id": 1, "name": "Employee Page", "url": "Employees.html" },
		{"id": 2, "name": "Departments Page", "url": "Departments.html" },
		{"id": 3, "name": "Job Titles Page", "url": "Job Titles.html"},
	];
	$scope.heading = $scope.tabs[0].name;
	$scope.page = $scope.tabs[0].name;
	
	function setPageState(tab){
		setPageHeader(tab);
		setTitleHeader(tab);
	}
	
	function setPageHeader(tab){
		$scope.heading = tab.name;
	}
	
	function setTitleHeader(tab){
		$scope.page = tab.name;
	}
	
	$scope.setPageHeader = setPageHeader;
	$scope.setTitleHeader = setTitleHeader;
	$scope.setPageState = setPageState;
})
;

