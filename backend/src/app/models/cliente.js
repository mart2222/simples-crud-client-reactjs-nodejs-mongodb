const mongoose = require("../../database");
const mongoosePaginate = require("mongoose-paginate");

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: String,
  cnpj: String,
  tipo: Boolean,
  contatos: {
    celular: String,
    email: String,
    telefone: String
  }
});

ClienteSchema.plugin(mongoosePaginate);

const Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = Cliente;
