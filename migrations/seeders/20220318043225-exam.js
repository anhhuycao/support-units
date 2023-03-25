/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        title: 'ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH KỲ THI ĐÁNH GIÁ NĂNG LỰC',
        course_id: 1,
        order_in_course: 1,
        type: 'ministry',
        duration: 150,
        is_free: false,
        created_date: moment().unix(),
        created_by: 1,
      },
    ];

    return await queryInterface.bulkInsert('exam', arr);
  },

  async down(queryInterface, Sequelize) {
    //
  },
};
