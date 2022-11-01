const pessoa = {
    nome: 'Jucinei',
    sobrenome: 'Belo',
    idade: 33,
    endereco: {
        rua: 'Armando Marinho',
        numero: 1370
    }
};

//Atribuição via desustruração 
const {nome, sobrenome, endereco:{rua, numero}, endereco, ...resto} = pessoa;

console.log(endereco)
console.log(rua, numero)
console.log(nome, sobrenome);
console.log(resto)
