const db = require("../database/models");
class TurmasController {
   static async pegaTodasAsTurmas(req, res) {
      try {
         const todasAsTurmas = await db.Turmas.findAll();
         return res.status(200).json(todasAsTurmas);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
   static async pegarUmaTurma(req, res) {
      const { id } = req.params;

      try {
         const umaTurma = await db.Turmas.findOne({ where: { id } });
         return res.status(200).json(umaTurma);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaTurma(req, res) {
      const novaTurma = req.body;

      try {
         const novaTurmaCriada = await db.Turmas.create(novaTurma);
         return res.status(201).json(novaTurmaCriada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaTurma(req, res) {
      const { id } = req.params;
      const novasInfos = req.body;

      try {
         await db.Turmas.update(novasInfos, { where: { id } });

         const TurmaAtualizada = await db.Turmas.findOne({ where: { id } });

         return res.status(200).json(TurmaAtualizada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaTurma(req, res) {
      const { id } = req.params;
      try {
         await db.Turmas.destroy({ where: { id } });
         res.status(204).json({message: `id ${id} deletado!`});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}

module.exports = TurmasController;
