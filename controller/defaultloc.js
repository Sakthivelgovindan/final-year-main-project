app.controller('defaultloc',['$scope','$state','$localStorage', function($scope,$state,$localStorage) {
  
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(11.3632, 77.8282),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    var myLatLng = {lat: 11.3632, lng: 77.8282};
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: $scope.map,
        title: 'K S Rangasamy College of Technology,Tiruchengodu'
      });


      $scope.busnumber={
        searchBus:undefined
      }


      $scope.searchBus = function(){
        $scope.busnumber=$scope.busnumber.searchBus;
        $localStorage.message = $scope.busnumber;
        if($scope.busnumber == 66){
            $state.go('busno66');
        }
        else if($scope.busnumber ==1){
            $state.go('busno1');
        }
        else if($scope.busnumber ==2){
            $state.go('busno2');
        }
        else if($scope.busnumber ==3){
            $state.go('busno3');
        }
        else if($scope.busnumber ==4){
            $state.go('busno4');
        }
        else if($scope.busnumber ==5){
            $state.go('busno5');
        }
        else{
            alert("bus not found");
            $scope.busnumber={
                searchBus:undefined
            }
        }
    }
}]);
    
    