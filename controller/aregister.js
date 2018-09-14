app.controller('aregister',['$scope','$localStorage','$http',function($scope,$localStorage,$http){
	$scope.names=[{value:"admin"}];
	//$scope.position=[{value:"Teaching"},{value:"Non-teaching"}];
	$scope.college=[{value:"K.S.Rangasamy College of Technology"}];
	$scope.status=[{value:"active"},{value:"inactive"}];
	$scope.adminInfo={
		adminId:$localStorage.data_value,
		firstname:undefined,
		lastname:undefined,
		email:undefined,
		department:undefined,
		mobile:undefined
	}

	$scope.adminRegister=function(){
		var data={
			aadminId:$scope.adminInfo.adminId,
			afirstname:$scope.adminInfo.firstname,
			alastname:$scope.adminInfo.lastname,
			aemail:$scope.adminInfo.email,
			amobile:$scope.adminInfo.mobile,
			acollege:$scope.selectedcollegeValue,
			astatus:$scope.selectedstatusValue,
			adesignation:$scope.selecteddesignationValue
		}
		console.log(data);
		if(data.aadminId==undefined || data.afirstname==undefined || data.alastname==undefined || data.aemail==undefined || data.amobile==undefined || data.acollege==undefined || data.astatus==undefined || data.adesignation==undefined){
			alert("please fill all input field...")
		}
		else{	
			$http({
				method:'POST',
				url:'php/aregister.php',
				data:data
			}).then(function (response){
				$scope.demo=JSON.stringify(response);
				console.log($scope.demo);
				alert("updated Successfully");
			}),function (error){
				console.log(error);
			}
			
		}
	}
		$scope.adminClear=function(){
			$scope.adminInfo={
					firstname:undefined,
					lastname:undefined,
					email:undefined,
					department:undefined,
					mobile:undefined
				}	
		}

	
	
}]);