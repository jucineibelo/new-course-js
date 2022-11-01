const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

if (numero >= 0 && numero <=50) {
juci.innerHTML = `O nº ${numero} está entre 1 e 50! Juci é o maioral em JS`}
else if (numero < 0) {
 juci.innerHTML = `Número negativo!!!`
} else {
    juci.innerHTML = `Número superior a 50!!!`
}


