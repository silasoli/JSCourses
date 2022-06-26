const arr1 = [1, 2, 3, 4];

const firstGreaterThanTwo1 = arr1.find(value => value > 2);

console.log(firstGreaterThanTwo1);
// 3

/////////////////////////////////////////////////////////////////

const arr2 = [1, 2, 3, 4];

const firstGreaterThanTwo2 = arr2.findIndex(value => value > 2);

console.log(firstGreaterThanTwo2);
// 2


/////////////////////////////////////////////////////////////////////

const arr3 = [1, 2, 3, 4];

const allValuesGreaterThanTwo3 = arr3.filter(value => value > 2);

console.log(allValuesGreaterThanTwo3);
// [ 3, 4 ]

/////////////////////////////////////////////////////////////////////

const arr4 = [1, 3, 3, 4, 3];

const firstIndexOfItem1 = arr4.indexOf(3);

console.log(firstIndexOfItem1);
// 1

/////////////////////////////////////////////////////////////////////

const arr5 = [1, 3, 3, 4, 3];

const lastIndexOfItem1 = arr5.lastIndexOf(3);

console.log(lastIndexOfItem1);
// 4

/////////////////////////////////////////////////////////////////////

const arr6 = [1, 3, 3, 4, 3];

const hasItemOne1 = arr6.includes(1);
console.log(hasItemOne1);
// true

const hasItemTwo1 = arr6.includes(2);
console.log(hasItemTwo1);
// false

/////////////////////////////////////////////////////////////////////

const arr7 = [1, 3, 3, 4, 3];

const hasSomeEvenNumber1 = arr7.some(value => value % 2 === 0);

console.log(hasSomeEvenNumber1);
// true

/////////////////////////////////////////////////////////////////////

const arr8 = [1, 3, 3, 4, 3];

const allEvenNumber1 = arr8.every(value => value % 2 === 0);

console.log(allEvenNumber1);
// false