const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

console.log(arr);
console.log(arr2);
// [ 1, 2, 3 ]
/////////////////////////////////////////
const arr3 = Array.of(1, 2, 3);
console.log(arr3);
// [ 1, 2, 3 ]

const persons = Array.of('John', 'Cris', 'Jenny');
console.log(persons);
// [ 'John', 'Cris', 'Jenny' ]

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto');
console.log(numbersAndStrings);
// [ 1, 2, 'strings', 'texto' ]
/////////////////////////////////////////////////////
const arr4 = Array(3);
console.log(arr4);
// [ <3 empty items> ]

const arr5 = Array(3, 2);
console.log(arr5);
// [ 3, 2 ]

const arrWith3Positions = Array(3);
console.log(arrWith3Positions);
// [ <3 empty items> ]
const personsList = Array('John', 'Cris', 'Jenny');
console.log(personsList);
// [ 'John', 'Cris', 'Jenny' ]
//////////////////////////////////////////////////////
const divs = document.querySelectorAll('div'); // NodeList
const arr6 = Array.from(divs); // Array

// Assim conseguimos chamar funções de array que não conseguiríamos com o NodeList