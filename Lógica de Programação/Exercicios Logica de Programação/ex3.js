/* Escreva uma função que receba um número e retorno o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisivél por 3 e por 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função para testar de 0 a 100 (fazer um loop depois da função)

*/

function retorno(num) {
    if (typeof num !== 'number') {
        return typeof num;
    } if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } if (num % 3 === 0) {
        return 'Fizz';
    } if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}



for (let i = 0; i <= 100; i++){
    console.log(i, retorno(i))
}

