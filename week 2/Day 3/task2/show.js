
app.controller("crt2",["$scope","service",function($scope,service){
    $scope.response=[];
    $scope.showdata=function(){
        $scope.response=service.getdata();
    }
}])