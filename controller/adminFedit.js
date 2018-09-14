app.controller('adminFedit',['$scope',function($scope){
	$scope.names=[{value:"Professor"},{value:"Assistant Professor"},{value:"HOD"}];
	$scope.position=[{value:"Teaching"},{value:"Non-teaching"}];
	$scope.college=[{value:"K.S.Rangasamy College of Technology"}];
	$scope.status=[{value:"active"},{value:"inactive"}];
}]);