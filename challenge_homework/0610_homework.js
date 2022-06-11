// if... else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문입니다. 참고 자료
// classList : 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해 줍니다. 참고 자료
// remove : classList의 메서드입니다. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의 참고 자료에서 확인할 수 있습니다.
// add : classList의 메서드입니다. classList의 리스트에 원하는 클래스를 추가할 수 있습니다. classList의 참고자료에서 확인할 수 있습니다.
// innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다. 


const body = document.querySelector("body");
const h1 = document.querySelector("h1");

const changeStyle = {
   clickEventResize: function(){
   body.classList.toggle("active");
   h1.classList.toggle("change");
   if(window.innerWidth < 768){
      h1.style.color = "white"
      body.style.backgroundColor = "cornflowerblue";
   }
   else if(window.innerWidth >= 768 && window.innerWidth <= 1200){
      h1.style.color = "white"
      body.style.backgroundColor = "purple";
   
   } else if(window.innerWidth > 1200 && window.innerWidth <= 1980){
      h1.style.color = "white"
      body.style.backgroundColor = "orange";
   } 
   }
}

window.addEventListener("resize", changeStyle.clickEventResize);
