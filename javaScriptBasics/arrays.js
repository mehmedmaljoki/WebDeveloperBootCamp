let students = [];

let colors = ['red', 'orange', 'yellow'];

let numbers = [1, 2, 3, 4, 5, 6, 67];

// a mixed Array
let stuff = [true, 68, 'cat', null];

// add to end of the array
stuff.push("meski"); // gives the new length of the array

// remove from the end of the array
numbers.pop(); // liefert das entfernte element

// remove from start of the array
let meski = ['meski', 'meskitest']
meski.shift(); // liefert das entferne element 

// add to start of the array
let test = ['meski', 'meskitest']
test.unshift(); // liefert die neue laenge


// other Array methods
// concat

const array1 = [1, 2, 3, 4, 5, 6,];
const array2 = [7, 8, 9];

const array3 = array1.concat(array2); // expected [1,2,3,4,5,6,7,8,9]


// includes
if (array2.includes('1')) {
    console.print("true");
}

//indexOf
array.indexOf(2) // expected 1

// reverse
array2.reverse(); // expected 9,8,7