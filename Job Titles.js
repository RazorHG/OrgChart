angular.module('JobTitle', [
	'ngStorage'
])
.controller('JobTitleCtrl', function($scope, $localStorage, $sessionStorage) {	
	$scope.$storage = $localStorage;
	$scope.defaultSelect = true;
	if ($scope.$storage.JobTitleList == null){$scope.$storage.JobTitleList ='[]'};
	$scope.newJobTitleString = '';
	$scope.parsedJobTitleList = JSON.parse($scope.$storage.JobTitleList);
	console.log($scope.parsedJobTitleList);
	$scope.$session = $sessionStorage;
	$scope.$session.editJobTitle = false;
	var index;
	$scope.newJobTitle = {
			name: '',
			description: '',		
		};
	
	function resetJobTitleForm() {
		$scope.newJobTitle = {
			name: '',
			description: '',		
		};
	}
	
	function createJobTitle(newJobTitle) {
		if ($scope.$session.editJobTitle == false){
			$scope.parsedJobTitleList.push(jQuery.extend(true, {}, $scope.newJobTitle ));
		}
		else {
			$scope.parsedJobTitleList[index] = $scope.newJobTitle;
			$scope.$session.editJobTitle = false;
		}
		$scope.$storage.JobTitleList =  JSON.stringify($scope.parsedJobTitleList);
		console.log($scope.newJobTitle);
		resetJobTitleForm();
	}
	
	function cancelCreating() {
		console.log("reset");
		resetJobTitleForm();
	}
	
	function editJobTitle(item){
		index = $scope.parsedJobTitleList.indexOf(item);
		$scope.newJobTitle = jQuery.extend(true, {}, item );
		$scope.$session.editJobTitle = true;
	}
	
	function deleteJobTitle(item){
		if (confirm("Do you want to delete this Job Title?")){
			index = $scope.parsedJobTitleList.indexOf(item);
			$scope.parsedJobTitleList.splice(index, 1); 
			$scope.$storage.JobTitleList =  JSON.stringify($scope.parsedJobTitleList);		
			resetJobTitleForm();
		}	;	
	}
	
	$scope.cancelCreating = cancelCreating;
	$scope.createJobTitle = createJobTitle;
	$scope.editJobTitle = editJobTitle;
	$scope.deleteJobTitle = deleteJobTitle;
})
;

