//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date( 0 + tresHoras );
//const data = new Date(2019, 3, 20, 15, 14, 27, 500);  // ano, mês, dia, hora, min, segundos, ms

/*
const data = new Date('2019-04-20 20:20:59.100')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString())

*/

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${hora}:${min}:${seg}`

}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)

