const nome = 'User' //String
const nome1 = "User" //String
const nome2 = `User` //String
const num1 = 10 //number
const num2 = 10.52 //number
let nomeAluno; //undefined -> não aponta para local nenhum na memória 
const sobreNomeAluno = null //Nulo -> não aponta para local nenhum na memória 
const aprovado = false; //Boolean = true, false (lógico)

console.log(typeof num2, num2)

let a = 666
let b = a 
console.log(b)

a = 777   //mesmo tendo mudado o valor da variavel  "a" 
         //o valor  da variavel "b" vai permanecer o que foi atribuido primeiro
console.log(b)

