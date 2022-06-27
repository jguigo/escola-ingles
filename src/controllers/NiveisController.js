const db = require("../database/models");
class NiveisController {
   static async pegaTodasOsNiveis(req, res) {
      try {
         const todasOsNiveis = await db.Niveis.findAll();
         return res.status(200).json(todasOsNiveis);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
   static async pegarUmNivel(req, res) {
      const { id } = req.params;

      try {
         const umNivel = await db.Niveis.findOne({ where: { id } });
         return res.status(200).json(umNivel);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaNivel(req, res) {
      const novoNivel = req.body;

      try {
         const novoNivelCriado = await db.Niveis.create(novoNivel);
         return res.status(201).json(novoNivelCriado);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaNivel(req, res) {
      const { id } = req.params;
      const novasInfos = req.body;

      try {
         await db.Niveis.update(novasInfos, { where: { id } });

         const NivelAtualizado = await db.Niveis.findOne({ where: { id } });

         return res.status(200).json(NivelAtualizado);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaNivel(req, res) {
      const { id } = req.params;
      try {
         await db.Niveis.destroy({ where: { id } });
         res.status(204).json({message: `id ${id} deletado!`});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restauraNivel(req, res) {
      const { id } = req.params;
      try {
         await db.Niveis.restore({ where: { id } });
         return res.status(200).json({message: `id ${id} restaurado`});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}

module.exports = NiveisController;
