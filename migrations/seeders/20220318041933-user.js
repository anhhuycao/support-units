const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrUser = [
      {
        username: 'admin',
        password: 'admin',
        email: 'admin@thanhphat.co',
        name: 'Administrator',
        role: 'admin',
        mobile: '0329143036',
        created_date: moment(new Date()).unix(),
        created_by: 1,
      },
      {
        username: 'editor',
        password: 'editor',
        email: 'editor@thanhphat.co',
        name: 'Editor',
        role: 'editor',
        mobile: '0329143037',
        created_date: moment(new Date()).unix(),
        created_by: 1,
      },
      {
        username: 'student',
        password: 'student',
        email: 'anhhuy.cao@gmail.com',
        name: 'Student',
        role: 'student',
        mobile: '0329143038',
        created_date: moment(new Date()).unix(),
        created_by: 1,
      },
    ];
    for (let i = 0; i <= 100; i++) {
      const objStudent = {
        username: `student${i}`,
        password: `student${i}`,
        email: `student${i}@thanhphat.co`,
        name: `Student${i}`,
        role: 'student',
        mobile: `${parseInt(Math.random() * 10000000000)}`,
        created_date: moment(new Date()).unix(),
        created_by: 1,
      };
      arrUser.push(objStudent);
    }

    return queryInterface.bulkInsert('user', arrUser);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  },
};
