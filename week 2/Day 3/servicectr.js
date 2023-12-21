let app=angular.module("app",[])
app.controller("crt",function($scope){
   $scope.arr;
   let c=0;
   $scope.getdata=function(){
    $scope.arr=service.getdata();
   }

   $scope.sendata=function(ele){
      service.sendata(ele);
   }
})