'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seo_config', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      item_type: { type: Sequelize.ENUM, allowNull: true, values: ['title', 'keyword'] },
      item_id: { type: Sequelize.INTEGER, allowNull: true },
      meta_index: { type: Sequelize.STRING, allowNull: true },
      meta_follow: { type: Sequelize.STRING, allowNull: true },
      meta_title: { type: Sequelize.STRING, allowNull: true },
      meta_description: { type: Sequelize.STRING, allowNull: true },
      image_url: { type: Sequelize.STRING, allowNull: true },
      created_date: { type: Sequelize.INTEGER, allowNull: false },
      created_by: { type: Sequelize.INTEGER, allowNull: false },
      updated_date: { type: Sequelize.INTEGER, allowNull: true },
      updated_by: { type: Sequelize.INTEGER, allowNull: true },
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable('seo_config');
  },
};
