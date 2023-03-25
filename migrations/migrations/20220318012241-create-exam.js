'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exam', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING, allowNull: false },
      course_id: { type: Sequelize.INTEGER, allowNull: false },
      order_in_course: { type: Sequelize.INTEGER, allowNull: false },
      type: { type: Sequelize.ENUM, allowNull: false, values: ['self_compilation', 'ministry', 'nationwide'] },
      attachment_id: { type: Sequelize.INTEGER, allowNull: true },
      thumbnail_id: { type: Sequelize.INTEGER, allowNull: true },
      duration: { type: Sequelize.INTEGER, allowNull: true },
      is_free: { type: Sequelize.BOOLEAN, allowNull: false },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('exam');
  },
};
