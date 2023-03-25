'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      parent_id: { type: Sequelize.INTEGER, allowNull: true },
      type: { type: Sequelize.ENUM, allowNull: false, values: ['single', 'integrating', 'fill_answer'] },
      content: { type: Sequelize.TEXT, allowNull: false },
      option_a: { type: Sequelize.TEXT, allowNull: true },
      option_b: { type: Sequelize.TEXT, allowNull: true },
      option_c: { type: Sequelize.TEXT, allowNull: true },
      option_d: { type: Sequelize.TEXT, allowNull: true },
      option_e: { type: Sequelize.TEXT, allowNull: true },
      option_f: { type: Sequelize.TEXT, allowNull: true },
      answer: { type: Sequelize.STRING, allowNull: true },
      is_answer_distinction: { type: Sequelize.BOOLEAN, allowNull: true },
      solution_method: { type: Sequelize.TEXT, allowNull: true },
      detail_explanation: { type: Sequelize.TEXT, allowNull: true },
      notice: { type: Sequelize.TEXT, allowNull: true },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('question');
  },
};
