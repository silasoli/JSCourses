function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }
  return Pessoa.instance;
}

const pSin1 = Pessoa.call({ name: "Silas" });
const pSin2 = Pessoa.call({ name: "Custon name" });

console.log(pSin1);
console.log(pSin2);
