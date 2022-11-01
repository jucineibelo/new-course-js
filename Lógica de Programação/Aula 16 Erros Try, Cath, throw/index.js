try {
    console.log(zyypui)
} catch (error) {
    console.log('is not defined')

}


function soma (x , y ) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números!')
    } else {
    return x + y ; 
    }
}

try {
    console.log(soma(20,800))
    console.log(soma(5,'vgn'))
} catch (error) {
    console.log('deu ruim')  
}
