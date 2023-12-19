//const data = null;

let get=document.getElementById("get");
function getdetails(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
    xhr.send();


xhr.onreadystatechange = function() {
	if (this.readyState === 4) {
		console.log(JSON.parse(this.responseText));
        document.getElementById("p1").innerHTML=this.responseText;
	}
};
}
