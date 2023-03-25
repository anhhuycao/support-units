'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course', {
      id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING, allowNull: true },
      thumbnail_attach_id: { type: Sequelize.INTEGER, allowNull: true },
      is_show: { type: Sequelize.BOOLEAN, defaultValue: true },
      ordering: { type: Sequelize.INTEGER, allowNull: true },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('course');
  },
};
