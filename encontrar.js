
const dados = require("./clientes.json")

function encontrar (lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));

}

const encontrado = encontrar(dados, "nome", "Kirby");
const encontrador2 = encontrar(dados, "telefone", "9291767581")
console.log(encontrado);
console.log(encontrador2);
