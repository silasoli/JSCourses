var nameVar = "Silas";
let nameLet = "Silas";
const nameConst = "Silas";

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

console.log("var------------------------------------------");

var test = "example";
(() => {
  console.log(`Valor dentro da function é: ${test}.`);

  if (true) {
    var test = "example";
    console.log(`Valor dentro do if é: ${test}.`);
  }

  console.log(`Valor após o if é: ${test}.`);
})();

console.log("let------------------------------------------");

(() => {
  let test = "value of function";
  console.log(`Valor dentro da function é: ${test}.`);

  if (true) {
    let test = "if value";
    console.log(`Valor dentro do if é: ${test}.`);
  }

  console.log(`Valor após o if é: ${test}.`);
})();

console.log("const-----------------------------------------");

(() => {
  const test = "value of function";
  console.log(`Valor dentro da function é: ${test}.`);

  if (true) {
    const test = "if value";
    console.log(`Valor dentro do if é: ${test}.`);
  }

  console.log(`Valor após o if é: ${test}.`);
})();

const name = "Silas";

//Não podemos alterar o valor
//name = "SilasOli"; error

const user1 = {
  name: "Silas",
};
//Mas se for um objeto podemos trocar suas propriedades
user1.name = "Outro nome";

//Não podemos fazer um objeto aprontar pra outro lugar
// user = {
//   name: "Silas",
// }; error

const persons = ["Silas", "Guilherme", "Pedro"];

//Podemos adicionar novos itens
persons.push('João')

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ',persons)
