const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// função para criar uma li 
function criaLi() {                                    
    const li = document.createElement('li');
    return li;
};

// criando um evento para a tecla enter ( enter === keyCode 13)
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

// função para limpar o imput onde digita a tarefa
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar está tarefa');
    li.appendChild(botaoApagar);
}

//criando uma função  para colocar um texto por parametro (textoInput) na li criada da função criaLI
function criaTarefa (textoInput) {
    const li = criaLi(); 
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

// criando o evento de click que criara uma função anonima para checar se o texto está vazio se não está vazio criar a tarefa (inputTarefa)
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});


// evento clique e função anonima para apagar uma tarefa 
document.addEventListener('click', function(e) {
    const elemento = e.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
    }
});


function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();