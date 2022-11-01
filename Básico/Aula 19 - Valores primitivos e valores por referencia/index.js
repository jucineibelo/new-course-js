/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
*/

let a = 'A'; 
let b = a;  // Cópia
console.log(a, b);
                         // dados primitivos não passam para outra variavel ou constante uma segunda vez ou mais a informação copiada endereço de memorias diferentes só é COPIADA a informação UMA VEZ
a = 'Outra coisa';
console.log(a, b);


/* 
Dados por referencia MUTAVEL -> array, object, function
*/
                        // já array, object ou function passa por referencia a informação, quando alterada a variavel ou constante 
                        //o valor muda também porque vai ser o mesmo endereço de memória 
let c = [1, 2, 3]       
let d = c;
console.log(c, d)

c.push(17)
console.log(c, d)

d.pop(0)
console.log(c, d)

let e = [...d]                    //cópia de e  ... spred



