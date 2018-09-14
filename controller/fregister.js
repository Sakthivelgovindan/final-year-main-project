app.controller('fregister',['$scope','$http','$state','$localStorage',function($scope,$http,$state,$localStorage){
	$scope.names=[{value:"Professor"},{value:"Assistant Professor"},{value:"HOD"}];
	$scope.position=[{value:"Teaching"},{value:"Non-teaching"}];
	$scope.college=[{value:"K.S.Rangasamy College of Technology"}];
	$scope.status=[{value:"active"},{value:"inactive"}];
	$scope.registerInfo={
		facultyId:$localStorage.data_value,
		firstname:undefined,
		lastname:undefined,
		email:undefined,
		department:undefined,
		mobile:undefined,
	}

	$scope.facultyRegister=function(){

			var data={
				sfacultyId:$scope.registerInfo.facultyId,
				sfirstname:$scope.registerInfo.firstname,
				slastname:$scope.registerInfo.lastname,
				semail:$scope.registerInfo.email,
				sdepartment:$scope.registerInfo.department,
				smobile:$scope.registerInfo.mobile,
				scollege:$scope.selectedcollegeValue,
				sstatus:$scope.selectedstatusValue,
				sposition:$scope.selectedpositionValue,
				sdesignation:$scope.selecteddesignationValue
			}

			$http({
				method:'POST',
				url:'php/fregister.php',
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
		$scope.facultyClear = function(){
			$scope.registerInfo={
				firstname:undefined,
				lastname:undefined,
				email:undefined,
				department:undefined,
				mobile:undefined,
			}
		}
	
	
}]);