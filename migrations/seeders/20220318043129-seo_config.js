/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrConfig = [];
    for (let i = 1; i <= 5; i++) {
      const objConfig = {
        item_type: `title`,
        item_id: i,
        meta_index: `meta_index ${i}`,
        meta_follow: `meta_follow ${i}`,
        meta_title: `meta_title ${i}`,
        meta_description: `meta_description ${i}`,
        image_url: `image_url ${i}`,
        created_date: moment(new Date()).unix(),
        created_by: 1,
      };
      arrConfig.push(objConfig);
    }

    return queryInterface.bulkInsert('seo_config', arrConfig);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('seo_config');
  },
};
