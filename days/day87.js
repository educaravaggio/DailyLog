/* codes for learning, not used on the pages */

// arrow functions - FreeCodeCamp

// anonymous function (will not be used again on the same code)
const myFunc = function() {
  const myVar = 'value';
  return myVar;
}

// the above function becomes
const myFunc = () => {
  const myVar = 'value';
  return myVar;
}

// and even more concise when it is not calling 
// other function within
const myFunc = () => 'value';


// map()
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log( materials.map ( material => material.length )); //[8, 6, 7, 9]

// filter()
const vals = [5,4,9,2,1];

vals = vals.filter( x => x % 2 ==0 ); // filter even numbers
console.log(vals); // 4,2

// rest parameters
function sum(...theArgs) { // variable parameters
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1,2,3)); // 6
console.log(sum(1,2,3,4)); // 10


// spread parameters
const arr = [6,89,3,45];
const maximus = Math.max(...arr); // 89


// destructuring - assign variables from objects
var voxel = {x:3.6, y = 7.4, z = 6.54};
const {x,y,z} = voxel;
// can associate to other variables
const {x:a, y:b, z:c};

// destructuring - assign variables from nested objects
const nest = {
  start : {x:5, y:6},
  end : {x:6, y:-9}
};
const {start: {x:startX, y:startY}} = nest;