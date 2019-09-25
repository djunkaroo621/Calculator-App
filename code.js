// Javascript for CALCULATOR APP
const numArray1 = [];

const press1 = () => {
  var num1 = "1";
  const array = numArray1.push(num1);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("one").addEventListener("click", press1);

const press2 = () => {
  var num2 = "2";
  const array = numArray1.push(num2);
  const connectedNum = numArray1.join('');
  numArray1.toString();
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("two").addEventListener("click", press2);

const press3 = () => {
  var num3 = "3";
  const array = numArray1.push(num3);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("three").addEventListener("click", press3);

const press4 = () => {
  var num4 = "4";
  const array = numArray1.push(num4);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("four").addEventListener("click", press4);

const press5 = () => {
  var num5 = "5";
  const array = numArray1.push(num5);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("five").addEventListener("click", press5);

const press6 = () => {
  var num6 = "6";
  const array = numArray1.push(num6);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("six").addEventListener("click", press6);

const press7 = () => {
  var num7 = "7";
  const array = numArray1.push(num7);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("seven").addEventListener("click", press7);

const press8 = () => {
  var num8 = "8";
  const array = numArray1.push(num8);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("eight").addEventListener("click", press8);

const press9 = () => {
  var num9 = "9";
  const array = numArray1.push(num9);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("nine").addEventListener("click", press9);

const press0 = () => {
  var num0 = "0";
  const array = numArray1.push(num0);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("zero").addEventListener("click", press0);

const pressPlus = () => {
  var numPlus = "+";
  const array = numArray1.push(numPlus);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("plus").addEventListener("click", pressPlus);

const pressMinus = () => {
  var numMinus = "-";
  const array = numArray1.push(numMinus);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("minus").addEventListener("click", pressMinus);

const pressMultiply = () => {
  var numMultiply = "*";
  const array = numArray1.push(numMultiply);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("multiply").addEventListener("click", pressMultiply);

const pressDivide = () => {
  var numDivide = "/";
  const array = numArray1.push(numDivide);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("divide").addEventListener("click", pressDivide);

const pressDecimal = () => {
  var numDecimal = ".";
  const array = numArray1.push(numDecimal);
  const connectedNum = numArray1.join('');
  console.log(numArray1.join(''));
  document.getElementById("displayX").innerHTML = connectedNum;
}
document.getElementById("decimal").addEventListener("click", pressDecimal);

const pressEqual = () => {
  const evalNumbers = numArray1.join('');
  console.log(evalNumbers);
    const result = eval(evalNumbers);
  document.getElementById("displayX").innerHTML = result;
}
document.getElementById("equal").addEventListener("click", pressEqual);

const pressClear = () => {
  document.getElementById("displayX").innerHTML = "";
  if (numArray1.length > 1) {
    const clearingMethod = numArray1.splice(0, numArray1.length);
    console.log(clearingMethod);
  };
}
document.getElementById("clear").addEventListener("click", pressClear);
//
// const pressMemorySave = () => {
//   document.getElementById("displayX").innerHTML =
// }
