
let nomeUsuario = "";
let nomeUsuarioUpper = nomeUsuario.toUpperCase();
let senha = "";

do{
    console.log("");
    nomeUsuario = prompt("Digite um nome de usuário: ");
    senha = prompt("Digite sua senha: ");
    

    if (senha === nomeUsuario || senha === nomeUsuarioUpper)
  {
    console.log("Erro, sua senha não pode ser o nome de usuário. Por favor tente novamente");
  }
  else
  {
    console.log("Senha concluída!");
    break;
  }
}while(senha === nomeUsuario || senha === nomeUsuarioUpper)


