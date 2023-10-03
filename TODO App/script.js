const input= document.querySelector("input");
const button= document.querySelector("button");
let todolist= document.getElementById("todolist");
 
button.addEventListener("click",addTask);

function addtask(){
    const todoText = input.value;
    if(todoText){
        const todoItem= document.createElement("li");
        todoItem.innerText=todoText;
        todolist.appendChild(todoItem);
        input.value= "";
    }
}