// default parameters
function multiply(x, y = 1) {
    // order matters, daher sollten 
    // default immer ab 2tem parameter kommen

    /* old way
        if (x === undefined) x = 1
        if (y === undefined) y = 1
    */
    return x * y;
}

// spread in function calls,
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Math.max(...nums); // make array iterable in seperate argumments

// spread with array literals
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const myNewArray = [...num1, ...num2, 7, 8, 9]; // verbinde alles

// spread with objects
const feline = {
    legs: 4,
    family: "Felidae"
};

const canine = {
    family: "Caninae",
    furry: true
};

const dog = { ...canine, isPet: true };
const lion = { ...feline, genus: "Panthera" };
const catDog = { ...feline, ...canine };

// rest params
function sumAll() {
    let total = 0;
    for (let i = 0; i < argumments.length; i++) {
        total += argumments[i];
    }
    return total;
}
//sumAll(8,4,3,2); // 17

function sumNew(...nums) {
    return nums.reduce((total, el) => total + el);
}


// destructorng from array
const scores = [47654, 87445, 56756, 234234, 34543];
const [gold, silver, ...everyoneElse] = scores;

// destructorng from objects
// mit : umbenennen der Variable
// mit = default Value falls es die Variable nicht gibt
const { email, firstName: vorname, lastName, test = "NA" } = user;


// man kann es auch in Funktionen Uebergabeparameter wie Objekte verwenden und
//      dann weiterarbeiten, was es leichter macht. oder slbst im Uebergabeparameter deconstruct, weil 
// man das sowieso uebergibt und man weiss welches Objekt es ist

