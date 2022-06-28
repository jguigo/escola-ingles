"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Pessoas extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // define association here
         Pessoas.hasMany(models.Turmas, {
            foreignKey: "docente_id",
         });
         Pessoas.hasMany(models.Matriculas, {
            foreignKey: "estudante_id",
         });
      }
   }
   Pessoas.init(
      {
         nome: {
            type: DataTypes.STRING,
            validate: {
               funcaoValidadora(dado) {
                  if (dado.length < 3) {
                     throw new Error("O campo deve ter mais de 3 caracteres!");
                  }
               },
            },
         },
         ativo: DataTypes.BOOLEAN,
         email: {
            type: DataTypes.STRING,
            validate: {
               isEmail: {
                  //poderia ser isEmail:true, mas ele também pode receber outros argumentos
                  args: true,
                  msg: "dados do tipo e-mail inválido",
               },
            },
         },
         role: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: "Pessoas",
         paranoid: true,
         defaultScope: {
            where: {
               ativo: true,
            },
         },
         scopes: {
            todos: { where: {} },
         },
      }
   );
   return Pessoas;
};
