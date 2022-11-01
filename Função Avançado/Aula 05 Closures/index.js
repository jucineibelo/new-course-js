function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Jucinei');
const funcao2 = retornaFuncao('Luiz');

console.log(funcao())
console.log(funcao2())

