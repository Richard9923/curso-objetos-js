const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115566787", "121312312321",],
    saldo: 200, 
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");

        }
         else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
         }
    }

};

cliente.efetuaPagamento(100);
console.log(cliente.saldo);