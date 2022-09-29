let num = 17.5698987
let num2 = Math.floor(num) // Math.floor - arredonar para baixo
console.log(num2)

let num3 = 8.56987
let num4 = Math.ceil(num3) // Math.ceil - arredonar para cima
console.log(num4)

let num5 = 23.49
let num6 = Math.round(num5) //Math.round se tiver .5 + arredonda para cima se tiver .49 ou menos arredonda para baixo
console.log(num6)

console.log(Math.max(1,2,3,4,5,6,7,8,9,10,1700,-5, -23)) // Math.max para ver qual é o maior número

console.log(Math.min(1,2,3,4,5,6,7,8,9,10,1700,-5, -23)) // Math.min para ver qual é o menor número

const aleatorio = Math.round(Math.random() * (10 - 5) + 5 ); // gerar numero aleatorio de 5 até 10
console.log(aleatorio)

console.log(Math.pow(2, 10)); // função para elevar a base ao expoente ou pode usar ** 

console.log(100 / 0); // Infinity Js avalia como (true)
