/* codes for learning, not used on the pages */

/* Use Destructuring Assignment to Pass an Object as a Function’s Parameters */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; 

  return function half({max, min}) { // pass the object as the argument in here
    return (max + min) / 2.0;
  };

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


/* TEMPLATE LITERALS */
/* Instead of using '+' to concatenate strings and quotes
it uses backticks(``) and ${} as a placeholder for variable
and even  expressions such as ${a + b}
Can be used for multiple lines*/

'use strict'

let name = 'John';

function makeUppercase(word) {
  return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;
document.getElementById('template').innerHTML = template; 

//xxxxxxxxxxxxxxxxx

let one = 1;
let two = 2;

let sum = `adding ${one} and ${two} give me ${one + two}.`;


//Tagged templates

let tagged = function(strArray, ...vals) { // takes two args: strings and values as a spread operator
  console.log(strArray);
  console.log(vals);
};

tagged `adding ${one} and ${two} give me ${one + two}.`; //(4) ["adding ", " and ", " give me ", ".", 
                                                         // (3) [1, 2, 3]


//output an array as a list

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  const resultDisplayArray = arr.map(item =>
    `<li class="text-warning">${item}</li>`); // separate each item in its own line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);