// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var test = 'hey Hi';
var test = 'hello';
// var can redeclare
// Let can not re declare
let testLet = 'Hello';

if (true) {
  var test = 'Hello India';
  let hello = 'Hello World';
}
console.log(test);

//Rest & Spread Operator

function sumAll(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumAll(1));
console.log(sumAll(1, 2, 3));

console.log(sumAll(1, 2, 3, 6));

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName('Julius', 'Caesar', 'Consul', 'Imperator');

// rest operator always passed at end

//spread operator

console.log(Math.max(2, 6, 9));

let num = [2, 6, 9];

console.log(Math.max(num)); //it's expect number as parameter not array

//Now spread operator will help

console.log(Math.max(...num));
