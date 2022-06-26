const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log("symbol1 é igual a symbol2", symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user3 = {
  [nameSymbol1]: "Guilherme",
  [nameSymbol2]: "Outro nome",
  lastName: "Cabrini da Silva"
};

console.log(user3);

// Symbols criam propriedades não enumerables
for (const key in user3) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user3[key]}`);
  }
}

console.log("Propriedades do objeto user:", Object.keys(user3));
console.log("Valores das propriedades do objeto user:", Object.values(user3));

// Exibir symbols de um objeto
console.log(
  "Symbols registrados no objeto user:",
  Object.getOwnPropertySymbols(user3)
);

// Acessando todas as propriedades do objeto
console.log("Todas propriedades do objeto user:", Reflect.ownKeys(user3));

// Criar um enum
const directions = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT")
};