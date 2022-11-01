//Declaração de função (Function hoisting)
falaoi();

function falaoi() {
    console.log("Oie");
}


//First-class objects (Objetos de primeira classe)
//Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

//Arrow function 

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto posso ter uma função

const objeto = {
    falar() {
        console.log('Estou falando...')
    }
};

objeto.falar();