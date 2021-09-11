// ------------- Trabalhando com Listas ----------------


const listaDeDestinos = new Array( // Aqui criamos uma lista
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);
/* Lembrete: mesmo que a a lista seja uma constante coseguimos 
   adicionar itens a ela por que a lista em si continua a mesma */ 

listaDeDestinos.push("Curitiba"); // Aqui adicionando um item a lista
console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

// listaDeDestinos = 2; // Vai Dar Erro!
// Isso por que você está tentando reatribuir valor a uma constante

listaDeDestinos.splice(2,1); // Aqui excluimos um item da lista

/* Nesse caso (2,1) | (Posição do item inicial, Número de itens) 
   2 = a posição do item que você quer excluir
   1 = número de itens que você quer excluir      */

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); 
// Aqui você exibi só um elemento especifico da lista 
console.log(listaDeDestinos[1],listaDeDestinos[0]); 