function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5, 5, 5));

//rest operator

function sum2(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum2(5, 5, 5, 5));

const multiply1 = (...args) => args.reduce((acc, value) => acc * value, 1);

console.log(multiply1(5, 5, 5, 5));

//spread operator
//strings, arrya e objs

const obj1 = [5, 5, 5, 5];

console.log(multiply1(...obj1));

const str = 'Silas Oli';

function logArgs(...args){
    console.log(args);
}

logArgs(...str)

const arr1 = [1,2,3]

const arr2 = [4,5,6]

const arr3 = [...arr1,...arr2];

console.log(arr1);
console.log(arr2);
console.log(arr3);


const obj2 = {
    name: 'silas'
}

const obj3 = {
    ...obj2,
    idade: '21'
}

console.log(obj2);
console.log(obj3);

