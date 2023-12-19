let name = localStorage.getItem("username");

let dis = document.getElementById("name");
dis.innerText = name;

// let logout=document.getElementById("logout");
function logout(){
   localStorage.removeItem("username");
   localStorage.removeItem("password");

}
