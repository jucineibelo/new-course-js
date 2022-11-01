const array = [1, 2, 3];
array.push(4);
array[0] = 'Juci'

console.log(array)

/////////////////////////////////////////////////////////////////////////

const nome = 'Jucinei';
const sobreNome = 'Belo';
const idade = 33;

/////////////////////////////////////////////////////////////////////////

const array2 = ['Jucinei', 'Belo', 33, 'gostoso']          // ARRAY

/////////////////////////////////////////////////////////////////////////

const objeto = {                     //OBJETO
    nome: 'Luiz',
    sobreNome: 'Belo',
    idade: 33
};
//////////////////////////////////////////////////////////////////////////

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,                                    // FUNÇÃO PARA CRIAR OBJETO
        sobrenome: sobrenome,
        idade: idade
    };
}    

const pessoa1 = criaPessoa('Jucinei', 'Belo', 33);
const pessoa2 = criaPessoa('Jorge', 'Belo', 24);
const pessoa3 = criaPessoa('Jucimar', 'Belo', 31);
const pessoa4 = criaPessoa('José', 'Belo', 63);
const pessoa5 = criaPessoa('Marilena', 'Belo', 53);


console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

//////////////////////////////////////////////////////////////////////////////

const pessoa = {
    nome: 'Juci',
    sobrenome: 'Belo',
    idade: 33,                                            //OBJETO COM DUAS FUNÇÕES DENTRO

    falar() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementarIdade() {
        this.idade ++;
    }
};

pessoa.falar();
pessoa.incrementarIdade();
pessoa.incrementarIdade();
pessoa.incrementarIdade();
pessoa.incrementarIdade();
pessoa.falar();