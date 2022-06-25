function soma(n1, n2){
    return n1+n2;
};

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
};

function validaIdade(idade){
    if(idade >=18){
        return true
    }else{
        return false
    }
}

const idade = prompt('Digite a sua idade');
alert(validaIdade(idade));

alert(soma(1,9));

alert(setReplace('Oi meu nome é Silas', 'Silas','SilasOli'));