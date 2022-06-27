"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.addColumn("Matriculas", "deletedAt", {
        type: Sequelize.DATE,
        allowNull: true
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.removeColumn("Matriculas", "deletedAt");
   },
};
