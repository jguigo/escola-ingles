"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.addColumn("Pessoas", "deletedAt", {
        type: Sequelize.DATE,
        allowNull: true
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.removeColumn("Pessoas", "deletedAt");
   },
};
