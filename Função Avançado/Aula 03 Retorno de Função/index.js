//função com retorno

function soma (a, b) {
    return a + b;
}
console.log(soma(500,63))




function criaPessoa(nome, sobrenome) {  //FUNÇÃO PARA CRIAR OBJETOS
    return {nome, sobrenome};
}
const p1 = criaPessoa('Jucinei', 'Belo');

console.log(p1)






/*
função sem retorno util para mudar a cor do fundo

document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})

*/