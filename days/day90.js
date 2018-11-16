/* codes for learning, not used on the pages */

// Day 21 of CSS in 30 Days, we built an animated spinner for loading pages


/* XXXXXXXXXXXXXXXX */
/* CLOSURES IN JS */
/* So what is closure in javascript?
"whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called"

"Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created."
techsith - https://www.youtube.com/watch?v=71AtaJpJHw0&t=2s
 */

 var addTo = function(passed) {

   var add = function(inner) {
     return passed + inner;
   };

   return add;
 };

 var addThree = new addTo(3);
 var addFour = new addTo(4);

 console.log(addThree(1));
 console.log(addFour(1));


 //---------------
 let f = () => {
   let i = 1;
   let j = 2;
   return () => {
     console.log(i);
   }
 };
 console.dir(f()); // will only output 1 because j is not being used so i will not have closure


 //---------------
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

//------Using closures to resize fonts

//HTML
<p>Some paragraph text</p>
<h1>some heading 1 text</h1>
<h2>some heading 2 text</h2>

<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>

//CSS
body { font-family: Helvetica, Arial, sans-serif; font-size: 12px;}
h1 { font-size: 1.5em; }
h2 { font-size: 1.2em; }

//JS
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

 /* the following snippet code must be written differently in languages that don't support closures
 Fun Fun Function https://www.youtube.com/watch?v=CQqwU2Ixu-U
 */
 var me = 'Bruce Wayne';
 function greetMe() {
   console.log('Hello, ' + me + '!');
 }
 greetMe(); // Hello, Bruce Wayne!

 //----
 function greetMe(me) {
   console.log('Hello, ' + me + '!');
 }
 greetMe('Bruce Wayne');