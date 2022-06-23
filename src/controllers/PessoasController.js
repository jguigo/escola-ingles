const db = require("../database/models");
class PessoasController {
   static async pegaTodasAsPessoas(req, res) {
      try {
         const todasAsPessoas = await db.Pessoas.findAll();
         return res.status(200).json(todasAsPessoas);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
   static async pegarUmaPessoa(req, res) {
      const { id } = req.params;

      try {
         const umaPessoa = await db.Pessoas.findOne({ where: { id } });
         return res.status(200).json(umaPessoa)
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}

module.exports = PessoasController;
