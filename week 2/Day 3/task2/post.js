
app.controller("crt1",["$scope","service",function($scope,service){
    $scope.sendata=function(){
        $scope.obj={
            name:$scope.inputvalue
        }
        service.sendata($scope.obj);
    }
}])