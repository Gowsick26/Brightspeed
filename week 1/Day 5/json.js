// GET method

function fetchdata(){
    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(data => console.log(data[0].author))
    .catch(error => console.log(error))
}



// POST method
 function postdata(){
    fetch(  "http://localhost:3000/profile",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({name:"deebak"})
    })
    .then()
    .then()
    .catch(error => console.log(error))
   
 }


//PUT method
function putdata(){
    fetch(  "http://localhost:3000/comments",{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({body:"wlecome how are you"})
    })
    .then()
    .then()
    .catch(error => console.log(error))
}    

//delete method
var userId=9;
function deletedata(){
        fetch(`http://localhost:3000/posts/${userId}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    }

