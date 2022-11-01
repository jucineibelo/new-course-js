const nome = ['Jucinei Luiz Belo', 'Camila Pierog', 'Jose Belo'];

for (let i = 0; i < nome.length; i++){      //FOR TRADICIONAL
    console.log(nome[i]);
}

for (let i in nome){                   // FOR IN 
    console.log(nome[i]);
}


for (let valor of nome) {           // FOR OF (NÃO PRECISA MENCIONAR O INDICE)  (NÃO FUNCIONA PRA OBJETOS)
    console.log(valor);
}


// For clássico - Geralmente com iteráveis (array ou strings)

// For in - Retorna o índice ou chave (string, array, ou objetos)

// For of - Retorna o valor em si (iteraveis, arrays ou strings)