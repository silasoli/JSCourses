const idade = 18;
if (idade > 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}

if (idade >= 18) {
  console.log("maior de idade");
} else {
  console.log("menor de idade");
}
//while
//const count = 0 (não funciona)
let count = 0;
while (count < 5) {
  console.log(count);
  //count++;
  count = count + 1;
}
//for
let count2;
for (count2 = 0; count2 <= 5; count2++) {
  console.log(count2);
};
//date
const data = new Date();
console.log('Pritando a data atual',data);
console.log('Pritando apenas o dia atual',data.getDay());
console.log('Pritando apenas o mês da data atual (o getMonth sempre conta do zero então é preciso somar +1)',data.getMonth()+1);
console.log('Pritando apenas o ano atual',data.getFullYear());
console.log('Pritando apenas a hora atual',data.getHours());