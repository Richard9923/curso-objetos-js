const dados = require("./cliente.json");

const clienteEmString = JSON.stringify(dados);

const objetoCliente = JSON.parse(clienteEmString);
