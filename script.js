const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("myInput");
const unorderedList = document.getElementById("list")

addToDoButton.addEventListener("click", function() {
    //toDo DIV
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDoDiv");
    //create LI
    let newTask = document.createElement("li");
    newTask.innerText=inputField.value;
    toDoDiv.appendChild(newTask);
    //Create Remove Button
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML="&#10060";
    toDoDiv.appendChild(removeBtn);
    inputField.value = "";
    //append to list
    unorderedList.appendChild(toDoDiv);
    removeBtn.addEventListener("click", function(){
        unorderedList.removeChild(toDoDiv);
    })
})

