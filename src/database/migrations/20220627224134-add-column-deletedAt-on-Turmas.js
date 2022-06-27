"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.addColumn("Turmas", "deletedAt", {
        type: Sequelize.DATE,
        allowNull: true
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.removeColumn("Turmas", "deletedAt");
   },
};
