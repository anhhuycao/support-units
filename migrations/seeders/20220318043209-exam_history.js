/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrObj = [];
    for (let i = 1; i <= 50; i++) {
      const obj = {
        exam_by: i,
        exam_id: 1,
        score: 80,
        times: 1,
        answers: JSON.stringify([
          {
            question_id: 1,
            answer: 'a',
          },
          {
            question_id: 2,
            answer: 'c',
          },
          {
            question_id: 3,
            answer: 'd',
          },
        ]),
        start_time: moment(new Date()).unix(),
        end_time: moment(new Date()).unix(),
        created_date: moment(new Date()).unix(),
        created_by: i,
      };
      arrObj.push(obj);
    }

    return queryInterface.bulkInsert('exam_history', arrObj);
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
