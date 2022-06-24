"use strict";
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("Matriculas", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         status: {
            type: Sequelize.STRING,
         },
         docente_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
               model: "Estudante",
               key: "id",
            },
         },
         docente_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
               model: "Niveis",
               key: "id",
            },
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Matriculas");
   },
};
