/* Escreva uma função chamada ePaisagem que recebe
 dois argumentos, largura e altura de uma imagem (number)
 Retorne true se a imagem estiver no modo páisagem.

 */

 function ePaisagem (largura, altura){
    if (largura > altura){
       return  true;
    } else {
        return false;
    }
 }
 console.log(ePaisagem(100,80));


 const ePaisagem2 = (larg, alt) => larg > alt ? true : false ;

 console.log(ePaisagem2(100,20));