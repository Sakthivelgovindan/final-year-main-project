app.controller('busno66',['$scope','$timeout','$http','$rootScope','$state','$localStorage',function($scope,$timeout,$http,$rootScope,$state,$localStorage){
    $scope.flag = false;
    $timeout(
       function(){
        $scope.latmaps();
       },10)
   
    $scope.latmaps = function(){
        $.getJSON("https://api.thingspeak.com/channels/395198/fields/1/last.json?api_key=JGYUPTTJHV0SA9BV", function(result){
            $scope.m = result;
            $scope.x=Number($scope.m.field1);
        
            $scope.lngmaps();
            });
       
     }
   $scope.lngmaps = function(){
         $.getJSON("https://api.thingspeak.com/channels/395198/fields/2/last.json?api_key=JGYUPTTJHV0SA9BV", function(result){ 
        $scope.n = result;
        $scope.y=Number($scope.n.field2);
  
        if($scope.flag == false){
            $scope.initialize();
            $scope.marker();
        }
        else{
    
            $scope.marker();
        }
        
        });
   }
    $scope.initialize = function() {
        $scope.flag = true;
         var mapOptions = {
            zoom: 14,
            center:{lat: $scope.x, lng: $scope.y},
            mapTypeId: google.maps.MapTypeId.TERRAIN
         }
         var myLatLng = {lat: $scope.x, lng: $scope.y};
         $rootScope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

         var marker = new google.maps.Marker({
             position: {lat: $scope.x, lng: $scope.y},
             map: map
         });   
     }

    $scope.marker = function(){
        var myLatLng = {lat: $scope.x, lng: $scope.y};
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: $rootScope.map,
            title: 'K S Rangasamy College of Technology,Tiruchengodu'
        });
        
        $scope.latmaps();
      
     }

      $scope.busnumber={
        searchBus:undefined,
        last_place:$localStorage.message
        
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