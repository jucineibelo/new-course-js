let num1 = 1;  // number
let num2 = 2.5;  // number

console.log(num1.toString() + num2)  //concatenar o num1 foi convertido para string temporariamente, pois ainda é um numero.

num1 = num1.toString(); // nesse caso o num1 (number) foi convertido para string. 

num1 = 10;
console.log(num1.toString(2)) // nesse caso o num1 foi transformado em um número binário.

num1 = 10.89854425454242;
console.log(num1.toFixed(2)) // toFixed função para definir as casas decimais.

console.log(Number.isInteger(num1)) // retorna um booleano se o Number realmente é Inteiro


let num5 = 0.7 //Number
let num6 = 0.1 //Number
num5 += num6; //0.8
num5 += num6; //0.9
num5 += num6; //1
num5 = Number(num5.toFixed(2)) // valor estava fechando 0.9999 foi necessario usar essas duas funçoes para ficar número inteiro 
console.log(num5)






