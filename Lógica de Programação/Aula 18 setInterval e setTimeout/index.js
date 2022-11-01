function mostrarHora() {                     //CRIANDO UMA FUNÇÃO PARA MOSTRAR A HORA
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){      //CRIANDO UMA FUNÇÃO PARA DEFINIR INTERVALOS DE TEMPO
    console.log(mostrarHora());
}, 2000);

setTimeout(function() {
    clearInterval(timer);
}, 8000);


setTimeout(function() {
    console.log('Olá mundo!')
}, 9000);