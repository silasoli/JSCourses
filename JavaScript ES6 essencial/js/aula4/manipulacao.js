//INSERIR NO FINAL
const arr1 = ['banana', 'melancia', 'abacate'];
const arrLength1 = arr1.push('acerola');

console.log(arrLength1);
// 4

console.log(arr1);
// [ 'banana', 'melancia', 'abacate', 'acerola' ]

//REMOVER NO FINAL
const arr2 = ['banana', 'melancia', 'abacate'];
const removedItem1 = arr2.pop();

console.log(removedItem1);
// abacate

console.log(arr2);
// [ 'banana', 'melancia' ]

//INSERIR NO INICIO
const arr3 = ['banana', 'melancia', 'abacate'];
const arrLength2 = arr3.unshift('acerola');

console.log(arrLength2);
// 4

console.log(arr3);
// [ 'acerola', 'banana', 'melancia', 'abacate' ]

//REMOVER NO INICIO
const arr4 = ['banana', 'melancia', 'abacate'];
const removedItem2 = arr4.shift();

console.log(removedItem2);
// banana

console.log(arr4);
// [ 'melancia', 'abacate' ]

//CONCATENAR ARRAYS
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];

const novoArr = arr5.concat(arr6);

console.log(arr5);
// [ 1, 2, 3 ]

console.log(arr6);
// [ 4, 5, 6 ]

console.log(novoArr);
// [ 1, 2, 3, 4, 5, 6 ]

//Fatiar ARRAY
const arr7 = [1, 2, 3, 4, 5];

console.log(arr7.slice(0, 2));
// [ 1, 2 ]

console.log(arr7.slice(2));
// [ 3, 4, 5 ]

console.log(arr7.slice(-1));
// [ 5 ]

console.log(arr7.slice(-3));
// [ 3, 4, 5 ]

//Adicionar elementos enquanto remove antigos
const arr8 = [1, 2, 3, 4, 5];

console.log(arr8.splice(2));
// [ 3, 4, 5 ]

console.log(arr8);
// [ 1, 2 ]

console.log(arr8.splice(0, 0, 'first'));
// []

console.log(arr8);
// [ 'first', 1, 2 ]