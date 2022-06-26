// break

console.log (`Exemplo da utilização de break`);

var index = 0;

while (true) {
    index++;

    if(index > 2){
        break;
    }
    console.log(index);
}

//continue
console.log(`\n Exemplo da utilização de continue`);
const arrayBreak = [1,2,3,4,5,6];

for (let index = 0; index < arrayBreak.length; index++) {
    const element = arrayBreak[index];

    if (element % 2 === 0) {
        continue;
    }
    console.log(element);
}