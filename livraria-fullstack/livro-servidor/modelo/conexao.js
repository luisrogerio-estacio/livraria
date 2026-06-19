const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/livraria",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => {

    console.log(
      "MongoDB conectado com sucesso"
    );

  })
  .catch((erro) => {

    console.error(
      "Erro ao conectar MongoDB:",
      erro.message
    );

  });

module.exports = mongoose;