
const cliente = {
    nome: "Rafael",
    idade: 32,
    saldo: 200,
    
    efetuarPagamento: function(valor) {
        if (valor < this.saldo) {
            console.log(`Dinheiro unsuficiente.`);
        } else {
            console.log(`Compra realizada. Seu saldo é de ${this.saldo}`);
        }
       
    }
    
}

// console.log(cliente);
// console.log(cliente.nome, cliente.idade);

cliente.enderecos = [
    {
      rua: "Salgado filho",
      numero: 987,  
    },
    {
      rua: "Bordes Canoa",
      numero: 567,  
    }
]




// console.log(Object.keys(cliente));

for (chave in cliente) {
    console.log(cliente[chave]);
}



