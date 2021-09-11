// ------------ Trabalhando com Condicionais -----------

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true ;
console.log("Destinos possíveis");
console.log(listaDeDestinos);


// Código focado em condicionais 
/*
if(idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1);
    console.log(listaDeDestinos);
}
else{
    if (estaAcompanhada){
        
        console.log("Comprador está acompanhado")
        listaDeDestinos.splice(1,1);
        console.log(listaDeDestinos);
    }
    else{
        console.log("Não é maior de idade e não posso vender");
    }
} 
*/

//Código focado em operadores lógicos = || && ! 
if(idadeComprador >= 18 || estaAcompanhada === true){
    console.log("Boa Viagem!")
    listaDeDestinos.splice(1,1); // removendo o item da lista
    console.log(listaDeDestinos);
}
else{
     console.log("Não é maior de idade e não posso vender");
    
} 

console.log("Embarcando: \n\n") // ( \n ) é uma forma de pular linha  
if(idadeComprador >= 18 && temPassagemComprada === true){
    console.log("Boa Viagem!")
}
else{
    console.log("Você não pode embarcar")
}