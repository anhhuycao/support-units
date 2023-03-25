'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('global_config', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      key: { type: Sequelize.STRING, allowNull: true },
      key_title: { type: Sequelize.STRING, allowNull: true },
      key_description: { type: Sequelize.STRING, allowNull: true },
      value: { type: Sequelize.STRING, allowNull: true },
      default_value: { type: Sequelize.STRING, allowNull: true },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('global_config');
  },
};
