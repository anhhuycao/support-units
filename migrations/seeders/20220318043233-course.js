/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrCourse = [];
    for (let i = 1; i <= 5; i++) {
      const objCourse = {
        title: `Course ${i}`,
        is_show: true,
        ordering: i,
        created_date: moment(new Date()).unix(),
        created_by: 1,
      };
      arrCourse.push(objCourse);
    }
    return queryInterface.bulkInsert('course', arrCourse);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
