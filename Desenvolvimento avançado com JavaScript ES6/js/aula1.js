function log1(params) {
  console.log(params);
}

log1("Declaração normal de função");

const log2 = function (params) {
  console.log(params);
};

log2("Declaração de função anonima");

//Arrow functions (são função anonimas)

const sum1 = (a, b) => a + b; // return implicito

const sum2 = (a, b) => {
  const total = a + b;
  return total;
};

const sum3 = a => a + 5; // return implicito

console.log(sum1(5, 15));

console.log(sum2(5, 15));

console.log(sum3(15));

const createOBJ = () => ({ teste: 123 });

console.log(createOBJ());

const log3 = value => {
  console.log(value);
};

log3("Declaração de arrow function");

const obj = {
    showContext:function showContext(){
        console.log(this);
    },
    log: function log(value){
        console.log(value);
    }
}

obj.showContext();