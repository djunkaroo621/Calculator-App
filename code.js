// Javascript for CALCULATOR APP
var numArray1= [];

// numArray1.join();
// console.log(numArray1.join([0,1,2]));

document.getElementById("one").addEventListener("click", jam1);

function jam1() {
  var num1= 1;
  numArray1.push(num1);
  console.log(numArray1);
}
document.getElementById("two").addEventListener("click", jam2);

function jam2() {
  var num2= 2;
  numArray1.push(num2);
  console.log(numArray1);
}
document.getElementById("three").addEventListener("click", jam3);

function jam3() {
  var num3= 3;
  console.log(numArray1);
}
document.getElementById("four").addEventListener("click", jam4);

function jam4() {
  var num4= 4;
  console.log(numArray1);
}
document.getElementById("five").addEventListener("click", jam5);

function jam5() {
  var num5= 5;
  console.log(numArray1);
}
document.getElementById("six").addEventListener("click", jam6);

function jam6() {
  var num6= 6;
  console.log(numArray1);
}
document.getElementById("seven").addEventListener("click", jam7);

function jam7() {
  var num7= 7;
  console.log(numArray1);
}
document.getElementById("eight").addEventListener("click", jam8);

function jam8() {
  var num8= 8;
  console.log(numArray1);
}
document.getElementById("nine").addEventListener("click", jam9);

function jam9() {
  var num9= 9;
  console.log(numArray1);
}
document.getElementById("zero").addEventListener("click", jam0);

function jam0() {
  var num0= 0;
  console.log(numArray1);
}
document.getElementById("plus").addEventListener("click",jamPlus);

function jamPlus() {
  var numPlus= "+";
  console.log(numArray1);
}
var smushed= numArray1.join('');
console.log(smushed);




// numArray1.join());

// document.getElementById("plus").addEventListener("click", jamPlus);
//
// function jamPlus() {
//   document.getElementById("displayX").innerHTML= "+";
// }
// document.getElementById("minus").addEventListener("click", jamMinus);
//
// function jamMinus() {
//   document.getElementById("displayX").innerHTML= "-";
// }
// document.getElementById("multiply").addEventListener("click", jamMultiply);
//
// function jamMultiply() {
//   document.getElementById("displayX").innerHTML= "*";
// }
// document.getElementById("divide").addEventListener("click", jamDivide);
//
// function jamDivide() {
//   document.getElementById("displayX").innerHTML= "/";
// }
