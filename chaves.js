

const cliente = {
    nome: 'Rafael',
    idade: 25,
}


cliente.endereco = "Rua Salgado Filho";

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")) {
    console.error("Erro. É necessário ter um endereço cadastrado");
}

