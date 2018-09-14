app.controller('adminSentry',['$scope','$http',function($scope,$http){
	
	$scope.loginInfo={
		username:undefined,
		password:undefined
	}
	$scope.adminSentry=function(){
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
				url:'php/adminSentry.php',
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