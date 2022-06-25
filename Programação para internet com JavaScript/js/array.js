const lista = ['Laranja', 'Pêra', 'Limão'];
console.log('Printando array', lista);
console.log('Index 0', lista[0]);
console.log('Index 1', lista[1]);
console.log('Index 2', lista[2]);
console.log('Printando array', lista);
//Usando push para adicionar novo index
lista.push('uva');
console.log('Printando array', lista);
//Usando pop para remover ultimo index
lista.pop();
console.log(lista);
console.log('Printando array', lista);
console.log('Printando tamanho do array', lista.length);
console.log('Printando array', lista);
console.log('Printando array utilizando reverse', lista.reverse());
console.log('Transformando array em string', lista.toString());
console.log(
  'Transformando array em string e printando a primeira letra',
  lista.toString()[0]
);
console.log(
  'Transformando array em strings separadas por -',
  lista.join(' - ')
);
const fruta = {
  nome: 'Pêra',
  cor: 'Verde',
};
console.log('Printando objeto', fruta);
console.log('Printando a propriedade nome', fruta.nome);
console.log('Printando a propriedade nome', fruta.cor);
const frutas = [
  {
    nome: 'Laranja',
    cor: 'Laranja',
  },
  {
    nome: 'Pêra',
    cor: 'Verde',
  },
  {
    nome: 'Limão',
    cor: 'Verde',
  },
];
console.log('Printando array de objetos', frutas);
console.log(
  'Printando a propriedade nome do index 0 do array de objetos',
  frutas[0].nome
);
console.log(
  'Printando a propriedade nome do index 1 do array de objetos',
  frutas[1].nome
);
console.log(
  'Printando a propriedade nome do index 2 do array de objetos',
  frutas[2].nome
);
