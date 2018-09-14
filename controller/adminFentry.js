app.controller('adminFentry',['$scope','$http',function($scope,$http){
	
	$scope.loginInfo={
		username:undefined,
		password:undefined
	}
	$scope.adminFentry=function(){
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
				url:'php/adminFentry.php',
				data:data
			}).then(function (success){
				$scope.demo=success.data;
				alert($scope.demo); 
				$scope.loginInfo.username=null;
				$scope.loginInfo.password=null;
			},function (error){
				console.log(error);
				console.log("error");

			});
		}
	}

	$scope.adminclearInfo=function(){
		$scope.loginInfo={
			username:undefined,
			password:undefined
		}
	}

}]);