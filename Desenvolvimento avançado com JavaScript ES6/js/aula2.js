function multiply1(a, b) {
  return a * b;
}

console.log(multiply1(5,5))

console.log(multiply1(5))


function multiply2(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply2(5,5))
  
  console.log(multiply2(5))
  

//lazy evaluation

function randomNumber(){
    return Math.random() * 10;
}

function multiply3(a, b = randomNumber()) {
    return a * b;
  }
  
  console.log(multiply3(5,5))
  
  console.log(multiply3(5))