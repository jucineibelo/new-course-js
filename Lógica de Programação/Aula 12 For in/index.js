const frutas = ['Pera', 'Maçã','Uva'];    

for (let i = 0; i < frutas.length; i++) {     //for tradicional
    console.log(frutas[i])
}

for (let i in frutas) {                     // for in  (lê os indices ou chaves do objeto)
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Jucinei',
    sobrenome: 'Belo',
    idade: 33
};

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves])
}

console.log(pessoa.sobrenome);
console.log(pessoa['sobrenome']);