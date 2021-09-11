export class Cliente{
    nome;
    _cpf;
      
    get cpf(){
        this._cpf;
        return this._cpf;
    }
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
    
}

export class Objeto {
    _valor;

    set valor(value) {
        _valor = value * 2 
    }
    get valor(){
     return valor ;
    }  
}