angular.module('JobTitle', [
	'ngStorage'
])
.controller('JobTitleCtrl', function($scope, $localStorage) {	

	$scope.newJobTitle = {
			name: '',
			description: '',		
		};
	$scope.JobTitles = [
		{"id": 0, "name": "Winner", "description": "Hero"},
		{"id": 1, "name": "Loser", "description": "Zero"},
	];
	
	function resetJobTitleForm() {
		$scope.newJobTitle = {
			name: '',
			description: '',		
		};
	}
	
	function createJobTitle(newJobTitle) {
		console.log("create");
	}
	
	function cancelCreating() {
		console.log("reset");
		resetJobTitleForm();
	}
	
	$scope.cancelCreating = cancelCreating;
	$scope.createJobTitle = createJobTitle;

})
;

