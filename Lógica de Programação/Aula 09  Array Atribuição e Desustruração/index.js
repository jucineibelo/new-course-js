const num = [a, b , c] = [1, 2, 3];
console.log(num)

// ...rest     ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,];

const [um, dois, tres, , cinco, ... resto] = numeros;

console.log(um, dois, tres, cinco)
console.log(resto)


//                 0          1          2
//              0  1  3    0  1  2    0  1  2
const numes = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3]= numes;

console.log(numes[1][0]);
console.log(lista2[2])


