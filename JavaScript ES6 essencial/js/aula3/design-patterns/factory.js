//Padrão Factory

function Pessoa() {
  return {
    name: "Silas",
    lastName: "Santos",
  };
}

const pFac1 = Pessoa();
console.log(pFac1);

// Exemplo 2
function Pessoa2(name) {
  return {
    name,
    lastName: "Santos",
  };
}

const pFac2 = Pessoa2("Custon Name");
console.log(pFac2);

//Exemplo 3
function Pessoa3(custonProperties) {
  return {
    name: "Silas",
    lastName: "Santos",
    ...custonProperties,
  };
}

const pFac3 = Pessoa3({ name: "Custon", age: 21 });
console.log(pFac3);
