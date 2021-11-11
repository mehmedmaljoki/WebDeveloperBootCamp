// for lopps syntax
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// nested loops 
let str = 'LOL';
for (let i = 0; i <= 10; i++) {
    console.log(`Outer is: ${i}`);
    for (let j = 0; j < str.length; j++) {
        console.log("      Inner: ", str[j]);
    }
}

const seatingChart = [
    ['test', 'wolf', 'Mati', 'Fischer', 'Sperr', 'baby', 'patrick'],
    ['opa', 'omma',]
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW: #${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(j, seatingChart[j]);
    }
}

// while loops

let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

const SECRET = "0000";
let guess = prompt('Enter the secret Code');
while (guess != SECRET) {
    guess = prompt('Enter the secret Code');
}
console.log("GREAT");

// for of

const seatingChart = ['test', 'wolf', 'Mati', 'Fischer', 'Sperr', 'baby', 'patrick'];
for (let chart of seatingChart) {
    console.log(chart);
}


for (let char of "hello World") {
    console.log(char)
}


// iterating arrays

const animal = ['lions', 'tigers', 'bears'];
for (let i = 0; i < animal.length; i++) {
    console.log(i, animal[i]);
}

//ierating objects

const testScores = {
    hans: 90,
    benjamin: 80,
    schwer: 70
}

for (let person in testScores) {
    console.log(`person ${person}: scored ${testScores[person]}`)
}

// Methods
    // Object.keys(testScores) -> hans, benjamin, schwer
    // Object.values(testScores) -> 90, 80, 70
    // Object.entries -> nested Array - beide zusammen
