/*
Jorge Belo tem 24 anos, pesa 80 kg tem 1.60 de altura e seu IMC é de 25.925925959595
*/

const nome = 'Jorge'
const sobreNome = 'Belo'
const idade = 24
const peso = 77
const altura = 1.60
let imc = peso / (altura * altura)
let anoNascimento = 2022 - idade

console.log('%s %s tem %d, pesa %d tem %d de altura e seu IMC é de %d', nome, sobreNome, idade, peso, altura, imc)

console.log(`${nome} ${sobreNome} tem ${idade}, pesa ${peso} tem ${altura} de altura e seu IMC é de ${imc}`) 