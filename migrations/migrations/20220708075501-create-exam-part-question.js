'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exam_part_question', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      exam_id: { type: Sequelize.INTEGER, allowNull: false },
      question_id: { type: Sequelize.INTEGER, allowNull: false },
      exam_part_id: { type: Sequelize.INTEGER, allowNull: false },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('exam_part_question');
  },
};
