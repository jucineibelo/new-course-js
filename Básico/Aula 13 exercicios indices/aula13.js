//               01234567   <- indices
let umaString = "Um texto";

console.log(umaString[4])  //procurar o que tem no indice 4 

console.log(umaString.charAt(4))

console.log(umaString+ " em um lindo dia!")  //concatenar

console.log(`${umaString} em um lindo dia!`)  //concatenar

console.log(umaString.indexOf('e'))  // procurar a letra 'e' e vai indicar o indice

console.log(umaString.search(/x/))  //procura a letra 'x' e vai indicar o indice

console.log(umaString.replace(/Um/, 'buceta'))

umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.length) // tamanho da string

console.log(umaString.slice(2, 6)) //selecionar de indice 2 até indice 6 

console.log(umaString.split(' ', 3)); // dividir em todos os espaços e transpormar em array

console.log(umaString.toUpperCase()) // maiusculo

console.log(umaString.toLowerCase()) // minusculo