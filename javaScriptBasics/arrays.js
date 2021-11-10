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

// slice ist - getting(copy) a portion of an Array. Man kann aber auch nur den start angeben, dann geht es
// bis zum Ende ab dem angegebenen Index
// wenn man eine negative Nummer angibt, dann startet er von hinten: zB -3 sind die letzten 3 Elemente
let sliceArrayExpected = stuff.slice(1, 3) // expected [69, cat, null]


// splice
// etwas an einer Stelle im Array einfuegen
// der erste Parameter ist die Stelle
// der zweite Parameter ist was man loeschen mochte und wie viele zB 0 ist nichts loeschem, 1 ist 1 Element usw..
// dh: man gibt den start an und ab dem wie viele Elemente loeschen
// der dritte Parameter: was man einfuegen moechte, konnen auch mehrere Sein


//returned wirden die geloeschten Elemente oder wenn nichts loschen das leere Array

const months = ['Jan', 'Feb', 'Mar', 'April', 'June'];

months.splice(1, 0, 'Feb');
months.splice(4, 1, 'May');

// sort -> array.sort -> diese Methode wandelt in UTF um und vergleicht deren Werte -> also jetzt useless