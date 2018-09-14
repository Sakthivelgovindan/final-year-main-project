app.controller('home', ['$scope','$state', function($scope,$state){
    
    
    $scope.sign_in = function(){
      $state.go('slogin');
    }

    $scope.admin_login = function(){
        $state.go('admin');
       
    }

}]);

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});