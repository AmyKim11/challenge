const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");
function onLoginSummit(event){
   event.preventDefault(); // 어떤 event의 기본 행동이든지 발생하지 않도록 막는것.
   // const userName = loginInput.value;
   console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSummit);
