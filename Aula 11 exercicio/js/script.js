alert('Olá, bem vindo, agora você vai fazer um calculo de adição!')

const confimar = confirm('Você deseja fazer o calculo? ')

if (confimar == true) {
    let num1 = window.prompt('Digite um número: ')
    let num2 = window.prompt('Digite um número para somar com: '+ num1)
    let resultado = Number(num1) + Number(num2)
    alert('O resultado da soma é de: ' + resultado)
}
else {
    alert('Você optou por não fazer o calculo!')
}