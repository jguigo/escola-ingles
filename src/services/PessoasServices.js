const Services = require("./Services");
const database = require("../database/models");

class PessoasServices extends Services {
   constructor() {
      super("Pessoas");
   }

   async pegaRegistrosAtivos(where = {}) {
      return database[this.nomeDoModelo].findAll({ where: { ...where } });
   }

   async pegaTodosOsRegistros(where = {}) {
      //.scope("todos") --> foi definido no modelo de Pessoas, e para utiliza-lo, coloco antes do método que quero utilizar
      return database[this.nomeDoModelo]
      .scope("todos")
      .findAll({ where: { ...where } });
   }
}

module.exports = PessoasServices;
