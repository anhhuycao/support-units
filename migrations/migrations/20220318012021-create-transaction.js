/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transaction', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: { type: Sequelize.INTEGER, allowNull: false },
      code_id: { type: Sequelize.INTEGER, allowNull: false },
      course_id: { type: Sequelize.INTEGER, allowNull: false },
      expiry_date: { type: Sequelize.INTEGER, allowNull: true },
      status: { type: Sequelize.ENUM, allowNull: false, values: ['pending', 'done'] },
      type: { type: Sequelize.ENUM, allowNull: false, values: ['all', 'a_part'] },
      ref_active_code_id: { type: Sequelize.INTEGER, allowNull: true },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('transaction');
  },
};
