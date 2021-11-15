// defining functions
function run() {

}

run();

// functions Argumment

function greet(firstName, lastName) {
    console.log(`Hey there ${firstName} ${lastName}`);
}


function reperatString(str, num) {
    let result = "";
    for (var i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}

// function return values
function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    let sum = x + y;

    return sum;
}

// mit var kann man außerhalb des Scopes auch zugreife.
// mit let und const sind die geblocked.

// exercises

// function expresions
const addition = function (a, b) {
    return a + b;
}

// higher Order Functions
function laugh() { console.log("HAHAHA") };

function callTwice(functionAsArgument) {
    functionAsArgument();
    functionAsArgument();
}

callTwice(laugh);

// returning functions

function makeMisteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("YES");
        }
    } else {
        return function () {
            console.log("NO");
        }
    }
}

// the Keyword this 

// adding methdos to objects

