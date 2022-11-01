// argumentos que sustenta todos os argumentos enviados
// arguments busca o valor que eu informei na chamada da função ( só funciona com fuction)

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7);

console.log("########")

// a funcao com varios parametros se nao informado todos os parametros na chamada, nesse caso os parametros restantes 
//vão ser reconhecidos como undefined 

function funcao2 (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}

funcao2(1, 2, 3)

console.log("########")


// nessa função caso não haja todos os parametros na chamada de função está defido um valor padrão para o parametro
// b e c 
function funcao3(a, b=2, c=4) {
    console.log(a + b + c)
}

funcao3(2)

console.log("########")

//function expression e resto (... rest operator) no ultimo parametro numeros

const conta= function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('*', 1, 20, 30, 40, 50);