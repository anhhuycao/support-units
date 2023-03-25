/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arrConfig = [
      {
        key: `business-license`,
        key_title: `Giấy phép cung cấp dịch vụ mạng xã hội trực tuyến số 337/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 10/07/2017. Giấy phép kinh doanh giáo dục: MST-0106478082 do Sở Kế hoạch và Đầu tư cấp ngày 24/10/2011. Chịu trách nhiệm nội dung: Phạm Đức Tuệ.`,
        created_date: moment(new Date()).unix(),
        created_by: 1,
      },
      {
        key: `policy`,
        key_title: `Chính sách....`,
        created_date: moment(new Date()).unix(),
        created_by: 1,
      },
      {
        key: `hot-line`,
        key_title: `19001001`,
        created_date: moment(new Date()).unix(),
        created_by: 1,
      },
    ];

    return queryInterface.bulkInsert('global_config', arrConfig);
  },

  async down(queryInterface, Sequelize) {
    //
  },
};
