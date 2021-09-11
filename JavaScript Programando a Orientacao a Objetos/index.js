import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';
import { Objeto } from './Cliente.js';


const cliente1Nome = "Ricardo";
const cliente1CPF = 11122233309;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = "Alice";
const cliente2CPF = 88822233309;
const cliente2Agencia = 1001;
const Cliente2Saldo = 0;



/* Esse é um exemplo de que repetição de código não é viavél
  
  -- Por isso para casos assim criamos classes --

*/



const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);




//console.log(cliente1);
//console.log(cliente2);


// ------------  Aula 2 ----------



const ContaCorrenteRicardo = new ContaCorrente(1001,cliente2);
const Conta2 = new ContaCorrente(102,cliente2);
console.log(cliente2.cpf);


 
ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.transferir(200, Conta2);

console.log(ContaCorrenteRicardo.saldo);

console.log(Conta2.saldo);

console.log(ContaCorrente.numeroDeContas); 










