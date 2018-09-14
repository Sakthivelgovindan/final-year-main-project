app.controller('sregister',['$scope','$http','$localStorage',function($scope,$http,$localStorage){
	$scope.names=[{value:"BE"},{value:"B.Tech"},{value:"ME"},{value:"M.Tech"},{value:"MBA"}];
	$scope.college=[{value:"K.S.Rangasamy College of Technology"}];
	$scope.status=[{value:"active"},{value:"inactive"}];
	$scope.registerInfo={
		userId:$localStorage.data_value,
		regno:undefined,
		firstname:undefined,
		lastname:undefined,
		email:undefined,
		department:undefined,
		yearofpassing:undefined,
		mobile:undefined
	}

	$scope.studentRegister=function(){

			var data={
				suserID:$scope.registerInfo.userId,
				sregno:$scope.registerInfo.regno,
				sfirstname:$scope.registerInfo.firstname,
				slastname:$scope.registerInfo.lastname,
				semail:$scope.registerInfo.email,
				sdepartment:$scope.registerInfo.department,
				sdegree:$scope.selectedItemValue,
				scollege:$scope.selectedcollegeValue,
				sstatus:$scope.selectedstatusValue,
				smobile:$scope.registerInfo.mobile,
				syear:$scope.registerInfo.yearofpassing

			}
			
			$http({
				method:'POST',
				url:'php/sregister.php',
				data:data
			}).then(function (response){
				console.log(response.data);
				alert(response.data);
				$scope.demo=JSON.stringify(response);
				console.log($scope.demo);
			}),function (error){
				console.log(error);
			}
			
		}

	$scope.studentClear=function(){
		$scope.registerInfo={
		regno:undefined,
		firstname:undefined,
		lastname:undefined,
		email:undefined,
		department:undefined,
		yearofpassing:undefined,
		mobile:undefined,
	}
	}
}]);