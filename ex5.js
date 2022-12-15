let conjuntoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = parseInt(prompt('Informe um número para verificar se está no conjunto: ' , 'Digite aqui'));

function conjunto(num1){

    for (let i = 0; i < conjuntoNumeros.length; i++){
       
    if (conjuntoNumeros.includes(num1)){
        console.log(true);
    }else{
        return console.log(false)
     }  
    }
}

conjunto(numero);