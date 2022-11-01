/*

&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY 
false 
0
'' "" ``
null / undefined
NaN

*/

function falarOi() {
    return 'Oie gato';
}

let executar = 'Juci';
console.log(executar && falarOi());

///////////////////////////////////////////////////

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)      //retorna o primeiro resultado que dar verdadeiro


