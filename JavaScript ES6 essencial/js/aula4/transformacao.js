const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.join('-'));
// 1-2-3-4-5

////////////////////////////////////////////////

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.reduce((total, value) => total += value, 0));
// 15