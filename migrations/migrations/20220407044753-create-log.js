'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      error: { type: Sequelize.TEXT },
      created_date: { type: Sequelize.INTEGER },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('log');
  },
};
