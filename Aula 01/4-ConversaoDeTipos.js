// --------------- Conversão de Tipos ----------------

console.log("ano " + 2020);
console.log("2"+"2");
console.log(parseInt("2")+parseInt("2"));

// Para Conversão vocÊ usa -----parseInt()-----

console.log("10"/"2");
console.log("10"-"2");
/* ---- PARA QUALQUER OPERAÇÃO QUE NAO SEJA SOMA -----
   Ele faz a conversão da ( / ) divisão automaticamente mesmo
   estando como tipo string. Ele entende que divisão é pra
   número */

console.log("Geórgia"+"100"); 
// Retorna = NaN (Significa Not a Number)

console.log("7"/"2");
/* Retorna = 3.5 | JavaScript trabalha com pontos flutuantes
   ou seja núemros com ponto ( . ) */

console.log(6,5) // Errado
console.log(6.5) // Certo 

/* Para trabalhar com números com quebrados é necessário usar 
o ponto ( . ), se você colocar ( , ) ele vai separar um 
número do outro */


