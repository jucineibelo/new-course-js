function saudacao() {                            // função dizer Bom dia 
    console.log('Bom dia!');
}

saudacao();          //chamei a função saudacao

/////////////////////////////////////////////////////////////////////////////////////////

function boaNoite(nome){                       //função com um parametro (nome)
    console.log(`Boa noite ${nome}`);
}

boaNoite('Jucinei');          // chamei a função com parametro boaNoite

/////////////////////////////////////////////////////////////////////////////////////////////

function soma(a,b) {                           // função soma com dois parametros 
    console.log(`O valor da soma é ${a + b}`)
}

soma(8, 9);          //chamei a função soma que tem dois parametros

////////////////////////////////////////////////////////////////////////////////////////////

function divisao(a, b) {                 //função com parametro e retorno 
    const resultado = a / b;
    return `O resultado da divisão é ${resultado}!`;   // return encerra a função 
}

console.log(divisao(67, 8));

/////////////////////////////////////////////////////////////////////////////////////////////

function somaComvalor(a = 1, b = 1) {  //nesse caso, quando chamar a função se não tiver valor os parametros vão ser 1  
const resultado = a + b;
return `O resultado da soma é ${resultado}`
}

console.log(somaComvalor());
console.log(somaComvalor(10));

//////////////////////////////////////////////////////////////////////////////////////////////

const raiz = function(num) {           //função anonima
    return num ** 0.5;
}

console.log(raiz(25))

////////////////////////////////////////////////////////////////////////////////////////////

const raizArrowFunction = num => num  ** 0.5;            //arrow function


console.log(raizArrowFunction(25))