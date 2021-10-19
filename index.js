var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var left = 1;
var right = 3;
function fun1() {
  btn2.classList.remove("selected-btn");
  btn3.classList.remove("selected-btn");
  btn1.classList.add("selected-btn");
  div2.classList.remove("selected-div");
  div3.classList.remove("selected-div");
  div1.classList.add("selected-div");
}
function fun2() {
  btn1.classList.remove("selected-btn");
  btn3.classList.remove("selected-btn");
  btn2.classList.add("selected-btn");
  div1.classList.remove("selected-div");
  div3.classList.remove("selected-div");
  div2.classList.add("selected-div");
}
function fun3() {
  btn1.classList.remove("selected-btn");
  btn2.classList.remove("selected-btn");
  btn3.classList.add("selected-btn");
  div1.classList.remove("selected-div");
  div2.classList.remove("selected-div");
  div3.classList.add("selected-div");
}
function show() {
  for (i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
  }
}
function moveLeft() {
  if (left <= 3 && right <= 5) {
    document.getElementById("c" + left).style.display = "none";
    left += 1;
    right += 1;
    for (i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  }
  return;
}
function moveRight() {
  if (left >= 2 && right >= 4) {
    document.getElementById("c" + right).style.display = "none";
    left -= 1;
    right -= 1;
    for (i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  }
  return;
}
