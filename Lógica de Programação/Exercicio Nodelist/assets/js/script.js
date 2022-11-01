const paragrafos = document.querySelector('.paragrafos'); // criar a constante paragrafos e selecionar a classe paragrafos do html 
const ps = paragrafos.querySelectorAll('p');  // selecionar as tags p dentro do container (classe paragrafo).

const estilosBody = getComputedStyle(document.body); 
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


for (let p of ps ) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}

