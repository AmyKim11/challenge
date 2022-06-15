const clockTitle = document.querySelector(".js-clock");

function dDay() {
  const date = new Date();
  const christmasDate = new Date("December 25, 2022");
  const daysGab = christmasDate.getTime() - date.getTime();
  const days = String(Math.floor(daysGab / (1000 * 60 * 60 * 24)));
  const hours = String(Math.floor((daysGab / (1000 * 60 * 60)) % 24)).padStart(2,"0");
  const minutes = String(Math.floor((daysGab / (1000 * 60)) % 60)).padStart(2,"0");
  const seconds = String(Math.floor((daysGab / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;}
dDay();
setInterval(dDay, 1000);

// Date 생성자 [new Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자입니다. Date 객체를 사용하기 위해 먼저 선언해 주어야 합니다. 참고 자료
// Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다. 
// Math.floor : 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수입니다. 
// setInterval : 인수로 전달받은 함수를 지정해 둔 일정한 간격으로 실행할 수 있게 해주는 함수입니다. 