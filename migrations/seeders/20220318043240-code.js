/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    const arrCode = [];

    for (let i = 0; i < 50; i++) {
      for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      arrCode.push({
        code: code,
        type: 'one_month',
        status: 'valid',
        course_ids: JSON.stringify([1, 2, 3]),
        created_date: moment().unix(),
        created_by: 1,
      });
      code = '';
    }
    return queryInterface.bulkInsert('code', arrCode);
  },

  async down(queryInterface, Sequelize) {
    //
  },
};
