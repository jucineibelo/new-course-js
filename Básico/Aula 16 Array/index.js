const alunos = ['Juci', 'Jorge', 'Marilena'];  //array de strings
//console.log(alunos[0]) // posição 1 do array

alunos[1] = 'Jorjão'  //Alterando o indice 1

alunos[alunos.length] = 'Luiza'  // adicionar elementos ao array

alunos.push('José');  //adicionar um elemento ao final da array

alunos.unshift('João')  //adicionar um elemento ao inicio da array

alunos.pop()  //remover ultimo elemento da array

alunos.shift() //remover primeiro elemento da array

delete alunos[2] //deletar posição do indice 

console.log(alunos.slice(0, 2)) //fatiar da posição 0 até 1 

console.log(typeof alunos);
console.log(alunos instanceof Array) // pergunta se o código é uma array? retorno booleano

console.log(alunos)

