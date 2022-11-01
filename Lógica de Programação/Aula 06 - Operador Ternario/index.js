// 'VALOR PARA VERDADEIRO' ?
// 'VALOR PARA FALSO' :

const pontuacao = 999;

const nivelUsuario = pontuacao >= 1000 ? 'Usuário Vip' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

