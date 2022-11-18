//generatos
// function* hello() {
//   console.log("Hello");
//   yield;
  
//   console.log("from");
//   const value = yield 2;

//   console.log("function.");
//   yield;
// }

// const it = hello();

// it.next();
// it.next();
// it.next('outside');

function* hello(){
    console.log("Hello")
    yield;
    console.log("from")
    yield;

    console.log("function.");
    yield;
}

const it = hello();

it.next();
it.next();
it.next();


const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for(var i = 0; i < this.values.length; i++){
        yield this.values[i];
    }
  },
};

for (let value of obj){
    console.log(value);
}