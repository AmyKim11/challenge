// <⚠️ DON'T DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DON'T DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const h2 = document.querySelector("h2");
const superEventHandler = {
   changeStyle1: function(){
      // const mouseenterClass ="over";
      h2.classList.toggle("over");
      h2.innerText = "The mouse is here!";
      h2.style.color = colors[0]; 
} , changeStyle2: function(){
      // const mouseleaveClass = "off";
      h2.classList.toggle("off");
      h2.innerText = "The mouse is gone!"
      h2.style.color = colors[1]; 
} , clickRight: function(){
      // const clickRightClass = "clickRight";
      h2.classList.toggle("clickRight");
      h2.innerText = "The was a right click";
      h2.style.color = colors[2];
} , resize: function(){
      // const winResize = "resize";
      h2.classList.toggle("resize");
      h2.innerText = "You just resize!";
      h2.style.color = colors[3];
}
};

h2.addEventListener("mouseenter", superEventHandler.changeStyle1);
h2.addEventListener("mouseleave", superEventHandler.changeStyle2);
window.addEventListener("contextmenu", superEventHandler.clickRight);
window.addEventListener("resize", superEventHandler.resize);