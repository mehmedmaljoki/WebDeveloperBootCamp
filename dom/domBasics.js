console.dir(); // alles anschauen

let example = document.getElementById('example'); // is an array

let example2 = document.getElementsByTagName()
// is not an array, it is a  html collectoin
// man kann nnicht array sytax nutzen
// alle tags von der sorte weren in der collection geliefert

let example3 = document.getElementsByClassName('example');
// auch kein array sondern html collection


// query selctor for better selecting, selecting one element
document.querySelector('h1'); // finds first h1 elemente

document.querySelector('#red'); // finds first element with ID red

document.querySelector('.big'); // finds first element with class of big

document.querySelector('a[title="java"]'); // find the anker tag with title java

document.querySelectorAll('p'); // liefert alle p


