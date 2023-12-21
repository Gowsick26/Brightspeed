app.service("service",["$http",function($http){

    let arr=[1,2,3,34,4]

    this.getdata=function(){
        return arr;
    }

    this.sendata=function(ele){
        arr.push(ele);
    }

}])