// foreach 
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n)
    // prints 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
    // prints 8, 6, 4, 2
})

// map -> man bekommt hier ein neues array returned

const texts = ['rolf', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t.toUpperCase();
});

// arrow functions
const square = (x) => {
    return x * x;
}

// return only if there is one lines (works)
const add = (x, y) => (x + y);

// shorter combine arrowfunction with map
const newMovies = movies.map(movie => (
    `${movie.title} ${movie.score}`
))

// filter

// find

// reduce

// some

// every