'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exam_part', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      exam_id: { type: Sequelize.INTEGER, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      ordering: { type: Sequelize.INTEGER, allowNull: false },
      total_question: { type: Sequelize.INTEGER, allowNull: false },
      duration: { type: Sequelize.INTEGER, allowNull: true },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('exam_part');
  },
};
