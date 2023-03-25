'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exam_history', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      exam_by: { type: Sequelize.INTEGER, allowNull: false },
      exam_id: { type: Sequelize.INTEGER, allowNull: false },
      score: { type: Sequelize.INTEGER, allowNull: false },
      times: { type: Sequelize.INTEGER, allowNull: false },
      answers: { type: Sequelize.TEXT, allowNull: false },
      start_time: { type: Sequelize.INTEGER, allowNull: false },
      end_time: { type: Sequelize.INTEGER, allowNull: false },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('exam_history');
  },
};
