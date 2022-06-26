function soma1(a, b) {
  return a + b;
}

soma1(2, 2);
soma1(2, 3);
soma1(2, 4);
soma1(2, 5);
console.log(soma1(2, 2))
console.log(soma1(2, 3))
console.log(soma1(2, 4))
console.log(soma1(2, 5))

//function soma com currying
function soma2(a) {
  return function (b) {
    return a + b;
  };
}
const soma = soma2(2); 

console.log('currying',soma(2))
console.log('currying',soma(3))
console.log('currying',soma(4))
console.log('currying',soma(5))
