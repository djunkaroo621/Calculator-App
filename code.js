// Javascript for CALCULATOR APP

// numArray1.join();
// console.log(numArray1.join([0,1,2]));
var numArray1 = [];
// document.getElementById("one").addEventListener("click", press1);

const press1 = () => {
  var num1 = 1;
  const array = numArray1.push(num1);
  // numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("one").addEventListener("click", press1);

// document.getElementById("two").addEventListener("click", press2);

// press2();

const press2 = () => {
  var num2 = 2;
  const array = numArray1.push(num2);
  // numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;

}

document.getElementById("two").addEventListener("click", press2);

const press3 = () => {
  var num3 = 3;
  const array = numArray1.push(num3);
  // numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("three").addEventListener("click", press3);


const press4 = () => {
  var num4 = 4;
  const array = numArray1.push(num4);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("four").addEventListener("click", press4);

const press5 = () => {
  var num5 = 5;
  const array = numArray1.push(num5);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("five").addEventListener("click", press5);

const press6 = () => {
  var num6 = 6;
  const array = numArray1.push(num6);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("six").addEventListener("click", press6);

const press7 = () => {
  var num7 = 7;
  const array = numArray1.push(num7);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("seven").addEventListener("click", press7);

const press8 = () => {
  var num8 = 8;
  const array = numArray1.push(num8);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("eight").addEventListener("click", press8);

const press9 = () => {
  var num9 = 9;
  const array = numArray1.push(num9);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("nine").addEventListener("click", press9);

const press0 = () => {
  var num0 = 0;
  const array = numArray1.push(num0);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("zero").addEventListener("click", press0);

const pressPlus = () => {
  var numPlus = "+";
  const array = numArray1.push(numPlus);
  numArray1.toString();
  const connectedNum = numArray1.join('')
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}

document.getElementById("plus").addEventListener("click", pressPlus);

const stringTranslator = (connectedNum) => {
JSON.stringify(connectedNum);
console.log(connectedNum);
document.getElementById("displayX").innerHTML = connectedNum;
}

function pressEqual() {
const eQ = document.getElementById("equal");
const arrayCalc = document.getElementById("displayX").innerHTML;
eQ.onclick = arrayCalc.value;
console.log(ArrayCalc.value);
}

//
// document.getElementById("displayX").innerHTML=
//
// document.getElementById("equal").addEventListener("click",jamEqual);
//
// function jamEqual() {
//   var numEqual= "=";
//   numArray1.push(numEqual);
//   numArray1.toString();
//   numArray1.join('')
//   console.log(numArray1.join(''));
// }
//
// document.getElementById('displayX').innerHTML= numArray1;
//
//
// document.getElementById("plus").addEventListener("click",jamPlus);
//
// function jamPlus() {
//   var numPlus= "+";
//   numArray1.push(numPlus);
//   console.log(numArray1);
// }
//
//
//
//
//
// numArray1.join();
//
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
