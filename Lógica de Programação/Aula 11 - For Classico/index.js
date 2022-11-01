for (let i = 92; i <= 100; i++) {
    console.log(`Linha ${i}`)
}


for (let i = 110; i <= 300; i+=10) {    //de 10 em 10
    console.log(`Linha ${i}`)
}


for (let i = 500; i >= 490; i--) {   //decremento
    console.log(`Linha ${i}`)
}

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}

///////////////////////////////////////////////////


const frutas = ['maçã', 'banana', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i])
}
