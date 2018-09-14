app.controller('busdetails',['$scope','$http',function($scope,$http){
    $scope.data=[];
    
  $scope.search_value=undefined;
  $scope.request = "all";
  var send_data={
    searchId:$scope.request
  };
      $http({
        method:'POST',
        url:'php/busdetails.php',
        data:send_data
      }).then(function(success){
          $scope.data = success.data;
           console.log($scope.data);
       
          
      },function(error){
        console.log(error);
      });


      $scope.search_details = function(){

        var send_data ={
          searchId:$scope.search_value
        }
        $http({
          method:'POST',
          url:'php/busdetails.php',
          data:send_data
        }).then(function(success){
         
          if(success.data.empty == "empty")
          {
              alert("Bus not found....")
          }
          else{
            $scope.data = success.data;
            console.log($scope.data);
          }
           
         
            
        },function(error){
          console.log(error);
        });
      }
}]);

