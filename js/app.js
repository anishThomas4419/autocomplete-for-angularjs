(function(){
	var appModule = angular.module('autoCompleteApp', []);
	
	appModule.controller('autoCompleteAppCtrl', function($scope){
		$scope.name = "anish";
		$scope.hideList = true;
		$scope.countryList = [
			"apple", "orange", "jackfruit"
		];
		
		$scope.selectedCountry = [];
		
		$scope.complete = function(countryValue){
			$scope.hideList= false;
			var filteredList = [];
			angular.forEach($scope.countryList, function(countryName){
				if(countryName.toLowerCase().toString().indexOf(countryValue.toLowerCase()) >= 0){
					filteredList.push(countryName)
				}
			})
			if(filteredList.length == 0){
				filteredList.push("No Results Found")
			}
			$scope.selectedCountry = filteredList;
		}
		
		$scope.assignSelected = function(selectedCountry){
			$scope.hideList= true;
			$scope.country = selectedCountry;
		}
		
		$scope.updateCountryList = function(e, listData){
			if(e.key === "Enter" && $scope.countryList.indexOf(listData) == -1){
				$scope.countryList[$scope.countryList.length]=listData;
			}
		}
		
		$scope.hidelist = function(){
			$scope.hideList = true;
		}
		
	});
})()