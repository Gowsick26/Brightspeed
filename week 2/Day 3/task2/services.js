
app.service("service",["$http",function($http){
    this.arr=[];
    this.getdata=function(){
        return this.arr;
    }

    this.sendata=function(data){
       this.arr.push(data);
       console.log(this.arr);
    }
}])