/* codes for learning, not used on the pages */

/* Getters => access properties inside objects
and 
Setters => change those properties
*/

const person = {
  firstName: 'Eduardo',
  lastName: 'Carvalho',

  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },

  set fullName(value) {// parameter used to change the assignment
    const parts = value.split(' '); // separate input in 2
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'John Smith';

console.log(person);

//XXXXXXXXXXXXXXXXXXXXXXX

/* Require - used to import functions and code, but some files and modules are large
and
Import - you can choose which part of the module you want to import
*/

// parameter of import
import { function } from "file_path_goes_here"
// We can also import variables the same way!


// export
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

/* Alternatively, if you would like to compact all your export statements into one line, you can take this approach: */

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }


//-----------------lib.js----------------
export const sqrt = Math.sqrt;
export function square(x) {
  return x *x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

// Import part of a module
//-------main.js----------
import { square, diag } from 'lib';
console.log(square(11));
console.log(diag(4, 3));

// import complete module
//------main.js----------
import as * lib from 'lib';
console.log(lib.square(11));
console.log(lib.diag(4, 3));