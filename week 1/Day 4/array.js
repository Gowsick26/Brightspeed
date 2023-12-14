let arr = ["mugundaan", "karthik", "gowsick"];
let show = document.getElementById("a");

function renderList() {
    show.innerHTML = ""; 
    arr.forEach((item, index) => {
        let list = document.createElement("li");
        list.innerHTML = item;
        list.setAttribute("id", index);
        show.appendChild(list);

        list.addEventListener('click', function () {
            let index = parseInt(this.getAttribute('id'));
            arr.splice(index, 1);
            renderList();
        });
    });
}

function del() {
    renderList(); 
}

del();
