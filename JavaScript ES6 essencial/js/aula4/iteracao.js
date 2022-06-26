const arr1 = [1, 2, 3, 4, 5];

arr1.forEach((value, index, array) => {
    console.log(`${index}: ${value} - ${array}`);
});
/*
0: 1 - 1,2,3,4,5
1: 2 - 1,2,3,4,5
2: 3 - 1,2,3,4,5
3: 4 - 1,2,3,4,5
4: 5 - 1,2,3,4,5
*/
//////////////////////////////////////////////////////////////
const arr2 = [1, 2, 3, 4, 5];

const novoArr1 = arr2.map(value => value * 2);

console.log(novoArr1);
// [ 2, 4, 6, 8, 10 ]

///////////////////////////////////////////////////////////////////
const arr3 = [1, 2, [3, 4]];

const novoArr2 = arr3.flat();

console.log(novoArr2);
// [ 1, 2, 3, 4 ]

///////////////////////////////////////////////////////////////////
const arr4 = [1, 2, 3, 4];

const novoArr3 = arr4.flatMap(value => [value * 2]);
console.log(novoArr3);
// [ 2, 4, 6, 8 ]

const novoArr5 = arr4.flatMap(value => [[value * 2]]);
console.log(novoArr5);
// [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

////////////////////////////////////////////////////////////////////////
const arr5 = [1, 2, 3, 4];

const arrIterator1 = arr5.keys();

console.log(arrIterator1.next());
// { value: 0, done: false }

console.log(arrIterator1.next());
// { value: 1, done: false }

console.log(arrIterator1.next());
// { value: 2, done: false }

console.log(arrIterator1.next());
// { value: 3, done: false }

console.log(arrIterator1.next());
// { value: undefined, done: true }

/////////////////////////////////////////////////////////////////////////////

const arr6 = [1, 2, 3, 4];

const arrIterator2 = arr6.values();

console.log(arrIterator2.next());
// { value: 1, done: false }

console.log(arrIterator2.next());
// { value: 2, done: false }

console.log(arrIterator2.next());
// { value: 3, done: false }

console.log(arrIterator2.next());
// { value: 4, done: false }

console.log(arrIterator2.next());
// { value: undefined, done: true }

/////////////////////////////////////////////////////////////////////////////////
const arr7 = [1, 2, 3, 4];

const arrIterator3 = arr7.entries();

console.log(arrIterator3.next());
// { value: [ 0, 1 ], done: false }

console.log(arrIterator3.next());
// { value: [ 1, 2 ], done: false }

console.log(arrIterator3.next());
// { value: [ 2, 3 ], done: false }

console.log(arrIterator3.next());
// { value: [ 3, 4 ], done: false }

console.log(arrIterator3.next());
// { value: undefined, done: true }