'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('code', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: { type: Sequelize.INTEGER, allowNull: true },
      code: { type: Sequelize.STRING, allowNull: false, unique: true },
      type: { type: Sequelize.ENUM, allowNull: false, values: ['two_days', 'one_month', 'one_year', 'customization'] },
      expiry_date: { type: Sequelize.INTEGER, allowNull: true },
      status: { type: Sequelize.ENUM, allowNull: false, values: ['valid', 'used', 'sent'] },
      course_ids: { type: Sequelize.STRING, allowNull: false },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('code');
  },
};
