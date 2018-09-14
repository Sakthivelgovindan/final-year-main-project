app.controller('slogin',['$scope','$http','$state','$localStorage',function($scope,$http,$state,$localStorage){
	$scope.loginInfo={
		username:undefined,
		password:undefined
	}
	$scope.sloginInfo=function(){
		var data={
			userloginId:$scope.loginInfo.username,
			userloginpass:$scope.loginInfo.password
		}		

		if(data.userloginId==undefined || data.userloginpass==undefined){
				alert("please fill all required field");
		}
		else{
			$http({
				method:'POST',
				url:'php/slogin.php',
				data:data
			}).then(function (success){
				$scope.demo=success.data;
				$scope.value= $scope.demo.value;
				if($scope.value==1){
					$state.go('home');
				}
				else if($scope.value==0){
					$state.go('sregister');
					$localStorage.data_value = data.userloginId;
				}
				else if($scope.value == undefined){
					alert("username and password is incorrect");
				}
				
			},function (error){
				console.log(error);
				console.log("error");

			});
		}
	}

	$scope.sclearInfo=function(){
		$scope.loginInfo={
			username:undefined,
			password:undefined
		}
	}
}]);