function relogio() {
    
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); //essa multiplicação é necessaria pois a função Date retorna os milésimos de segundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer = 0;

function iniciarRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
    };

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    };
});

}

relogio();
