app.controller('admin',['$scope','$http','$state','$localStorage',function ($scope,$http,$state,$localStorage){

		$scope.adminInfo ={
			adminId:undefined,
			password:undefined
		}
			$scope.adminLogin=function(){

			var data={
				adminloginId:$scope.adminInfo.adminId,
				adminloginpass:$scope.adminInfo.password
			};
			if(data.adminloginId==undefined || data.adminloginpass==undefined){
				alert("please fill all required field");
			}
			
		else{


		   $http({
		      method: 'POST',
		      url: 'php/admin.php',
		      data:data
		   }).then(function (success){
		   	$scope.demo=success.data;
				$scope.value= $scope.demo.value;
				console.log($scope.value);
				if($scope.value==1){
					$state.go('admininsert');
				}
				else if($scope.value==0){
					$state.go('aregister');
					$localStorage.data_value = data.adminloginId;
					alert($localStorage.data_value);
				}
				else if($scope.value == undefined || $scope.value == "undefined"){
					
					alert("username and password is incorrect");
					
				}
				
				
		   },function (error){
		   	console.log(error);
		   		
		   });
		}
		
		/*	$http.post('php/admin.php', data).then(successCallback, errorCallback);

			function successCallBack(response){
					console.log(response);
			}
			function errorCallback(error){
				console.log(error);
			}

			 /*$http({
      			method: 'POST',
      			url: 'php/admin.php'
   				}).then(function (success){

  				 },function (error){
  			});*/
		}

		$scope.aclearInfo=function(){
		$scope.loginInfo={
			username:undefined,
			password:undefined
		}
	}
}]);