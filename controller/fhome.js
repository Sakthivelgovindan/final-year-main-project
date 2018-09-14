app.controller('fhome',['$scope','$state','$localStorage',function($scope,$state,$localStorage){
	//console.log($localStorage.login);
	if($localStorage.flogin===undefined || $localStorage.flogin==="undefined"){
		alert("username and password is incorrect");
		$state.go('flogin');
	}
	else{
		$state.go('home');
	}


}]);