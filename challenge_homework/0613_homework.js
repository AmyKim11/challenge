const arrangeNumInput = document.querySelector("#numone input");
const userChoseNumber = document.querySelector("#numtwo input#guessnum");
const clickButton = document.querySelector(".button");
const gameResultText = document.querySelector("#numtwo p");
const finalResult = document.querySelector("#numtwo h3");

const HIDDEN_CLASSNAME = "hidden";
// const ARRANGENUMBER = "arrangeNumber";
// const USERCHOESNUMBER = "userchoesnumber";

// function numberQuest(event){
//    event.preventDefault();
//    const fixNumber = parseInt(arrangeNumInput.value);
//    localStorage.setItem(ARRANGENUMBER, fixNumber);
//    // fianalText.classList.add(HIDDEN_CLASSNAME); //클래스 명을 추가해줌.
//    randomChangeNum(fixNumber);
// }

function randomChangeNum(event){
   event.preventDefault();
   const fixNumber = parseInt(arrangeNumInput.value);
   // localStorage.getItem(ARRANGENUMBER);
   const userInputNum = parseInt(userChoseNumber.value);
   const autoRandomNum = Math.floor(Math.random()*fixNumber);
   gameResultText.innerText = `You Chose: ${userInputNum}, the machine Chose: ${autoRandomNum}`
   gameResultText.classList.remove(HIDDEN_CLASSNAME);
   finalResult.classList.remove(HIDDEN_CLASSNAME);
   if(userInputNum === autoRandomNum){
      finalResult.innerHTML = "You won!";
   } else{
      finalResult.innerHTML = "You lost!";
   }
}


clickButton.addEventListener("click",randomChangeNum);



// 1. 지정해 준 숫자를 로컬 스토리지에서 가져와서 결과로 나오는 글귀에 넣어줌.
// 2. 범위 지정해 준 숫자안에서 랜덤하게 숫자가 돌아가야 함.
// 3. 'You Choes:' 다음에 이용자가 랜덤으로 입력한 숫자를 가져와야함.
// 4. 'the machine choes' 다음에, 0~ 로컬스토리지에서 가져온 숫자까지 랜덤하게 숫자 나오게 함.
// 5. 'You Choes' 숫자와 'the~' 숫자가 일치하면 'You loes'. 불일치 하면 'You won!' 이 출력되게 함.



