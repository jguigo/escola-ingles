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
         return res.status(200).json(umaPessoa);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaPessoa(req, res) {
      const novaPessoa = req.body;

      try {
         const novaPessoaCriada = await db.Pessoas.create(novaPessoa);
         return res.status(201).json(novaPessoaCriada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaPessoa(req, res) {
      const { id } = req.params;
      const novasInfos = req.body;

      try {
         await db.Pessoas.update(novasInfos, { where: { id } });

         const pessoaAtualizada = await db.Pessoas.findOne({ where: { id } });

         return res.status(200).json(pessoaAtualizada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaPessoa(req, res) {
      const { id } = req.params;
      try {
         await db.Pessoas.destroy({ where: { id } });
         res.status(204).json({ message: `id ${id} deletado!` });
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async restauraPessoa(req, res) {
      const { id } = req.params;
      try {
         await db.Pessoas.restore({ where: { id } });
         return res.status(200).json({message: `id ${id} restaurado`});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async pegarUmaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;

      try {
         const umaPessoa = await db.Matriculas.findOne({
            where: {
               id: Number(matriculaId),
               estudante_id: Number(estudanteId),
            },
         });
         return res.status(200).json(umaPessoa);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaMatricula(req, res) {
      const { estudanteId } = req.params;
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

      try {
         const novaMatriculaCriada = await db.Matriculas.create(novaMatricula);
         return res.status(201).json(novaMatriculaCriada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;
      const novasInfos = req.body;

      try {
         await db.Matriculas.update(novasInfos, {
            where: {
               id: Number(matriculaId),
               estudante_id: Number(estudanteId),
            },
         });

         const matriculaAtualizada = await db.Pessoas.findOne({
            where: { id: Number(matriculaId) },
         });

         return res.status(200).json(matriculaAtualizada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params;
      try {
         await db.Matriculas.destroy({ where: { id: Number(matriculaId) } });
         res.status(204).json({ message: `id ${matriculaId} deletado!` });
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}

module.exports = PessoasController;
