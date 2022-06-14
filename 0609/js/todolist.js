const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
   localStorage.setItem("todos", JSON.stringify(toDos)); //array를 string으로 바꿔줌
}

function deleteToDo(event){
   const li = event.target.parentElement; // 어느 버튼의 부모요소인지 찾아주는 코드.
   li.remove(); // 해당 버튼의 부모 요소 삭제
}

function paintToDo(newTodo){
   // console.log("I will paint", newTodo);
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;
   const button = document.createElement("button");
   button.innerText = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span); // li 태그 밑에 자식 요소로 span이 들어가게 함.
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event){
   event.preventDefault();
   const newTodo = toDoInput.value; //newTodo에 toDoInput value값을 복사해 놓음. 
   toDoInput.value = "";
   toDos.push(newTodo);
   paintToDo(newTodo); //newToDo에 있는 값을 가져가 paintToDo함수를 호출함.
   saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);