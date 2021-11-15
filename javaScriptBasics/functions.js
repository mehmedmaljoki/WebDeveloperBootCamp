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

// exercises
