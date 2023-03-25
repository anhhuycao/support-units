/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
const moment = require('moment');

module.exports = {
  async up(queryInterface, Sequelize) {
    const arr = [
      {
        type: 'single',
        content:
          '<p class="western" lang="vi-VN" align="justify">Trong c&aacute;c thể loại sau, thể loại n&agrave;o thuộc loại h&igrave;nh kịch h&aacute;t d&acirc;n gian, kết hợp c&aacute;c yếu tố trữ t&igrave;nh v&agrave; tr&agrave;o lộng để ca ngợi những tấm gương đạo đức v&agrave; ph&ecirc; ph&aacute;n, đả k&iacute;ch c&aacute;i xấu trong x&atilde; hội?</p>',
        option_a: 'Truyền thuyết.',
        option_b: 'Thần thoại.',
        option_c: 'Truyện thơ.',
        option_d: 'Chèo.',
        answer: 'a',
        created_date: moment().unix(),
        created_by: 1,
      },
      {
        type: 'single',
        content:
          '<p class="western" lang="vi-VN" align="justify">T&ecirc;-l&ecirc;-m&aacute;c l&agrave; nh&acirc;n vật trong đoạn tr&iacute;ch n&agrave;o?</p>',
        option_a: '“Uy-lit-xơ trở về” (trích sử thi Ô-đi-xê).',
        option_b: '“Ra-ma buộc tội” (trích sử thi Ra-ma-ya-na).',
        option_c: '“Đẻ đất đẻ nước” (trích sử thi Đẻ đất đẻ nước).',
        option_d: '“Chiến thắng Mtao-Mxây” (trích sử thi Đăm Săn).',
        answer: 'b',
        created_date: moment().unix(),
        created_by: 1,
      },
      {
        type: 'single',
        content:
          '<p class="western" lang="vi-VN" align="justify">&ldquo;<span style="font-size: small;"><span style="font-size: medium;"><em>K&igrave;a ai tỉnh, k&igrave;a ai say</em></span></span></p>\n<p class="western" lang="vi-VN" align="justify"><span style="font-size: small;"><span style="font-size: medium;"><em>K&igrave;a ai ghẹo nguyệt giữa ban ng&agrave;y. Khoan khoan xin h&atilde;y dừng tay lại, Chớ m&oacute; hang h&ugrave;m nữa mất tay</em></span><span style="font-size: medium;">&rdquo;</span><span style="font-size: medium;"><em>.</em></span></span></p>\n<p class="western" lang="vi-VN" align="justify"><span style="font-size: small;"><span style="font-size: medium;">(Hồ Xu&acirc;n Hương</span><span style="font-size: medium;"><em>, Xướng họa với quan Tế tửu họ Phạm</em></span><span style="font-size: medium;">, b&agrave;i 2) H&agrave;nh động &ldquo;ghẹo nguyệt&rdquo; của nh&acirc;n vật trữ t&igrave;nh trong b&agrave;i thơ tr&ecirc;n c&oacute; &yacute; nghĩa g&igrave;?</span></span></p>',
        option_a: 'Trêu chọc mặt trăng.',
        option_b: 'Trêu chọc người con gái đẹp.',
        option_c: 'Trêu chọc người con gái hung dữ.',
        option_d: 'Trêu chọc con hùm trong hang.',
        answer: 'd',
        created_date: moment().unix(),
        created_by: 1,
      },
      {
        type: 'single',
        content:
          '<p class="western" lang="vi-VN" align="left">&ldquo;<span style="font-size: small;"><span style="font-size: medium;"><em>Một mai, một cuốc, một cần c&acirc;u Thơ thẩn dầu ai vui th&uacute; n&agrave;o</em></span></span></p>\n<p class="western" lang="vi-VN" align="left"><span style="font-size: small;"><span style="font-size: medium;"><em>Ta dại, ta t&igrave;m nơi vắng vẻ</em></span></span></p>\n<p class="western" lang="vi-VN" align="left"><span style="font-size: small;"><span style="font-size: medium;"><em>Người kh&ocirc;n, người đến chỗ lao xao Thu ăn măng tr&uacute;c, đ&ocirc;ng ăn gi&aacute; Xu&acirc;n tắm hồ sen, hạ tắm ao</em></span></span></p>\n<p class="western" lang="vi-VN" align="left"><span style="font-size: small;"><span style="font-size: medium;"><em>Rượu đến gốc c&acirc;y, ta sẽ nhắp Nh&igrave;n xem ph&uacute; qu&iacute;, tựa chi&ecirc;m </em></span><span style="font-size: medium;"><em>bao</em></span><span style="font-size: medium;">&rdquo;</span><span style="font-size: medium;"><em>.</em></span></span></p>\n<p class="western" lang="vi-VN">(Nguyễn Bỉnh Khi&ecirc;m, <em>Nh&agrave;n</em>)</p>\n<p class="western" lang="vi-VN">Quan niệm nh&agrave;n của Nguyễn Bỉnh Khi&ecirc;m <strong>kh&ocirc;ng </strong>mang nội dung n&agrave;o?</p>',
        option_a: 'Sống nhàn hạ, tránh vất vả về mặt thể xác.',
        option_b: 'Tránh xa vòng danh lợi, giữ cốt cách thanh cao.',
        option_c: 'Sống hòa hợp với thiên nhiên.',
        option_d: 'Sống đạm bạc, giữ sự tự tại về mặt tâm hồn.',
        answer: 'c',
        created_date: moment().unix(),
        created_by: 1,
      },
      {
        type: 'fill_answer',
        content:
          '<p><strong><em>Trong tổ chức dạy kể chuyện c&acirc;u chuyện &ldquo;Hai con d&ecirc; qua cầu&rdquo; (Tiếng Việt 1, tập 1, Bộ C&aacute;nh diều), GV đ&atilde; đặt c&acirc;u hỏi cho HS như sau: V&igrave; sao d&ecirc; đen v&agrave; d&ecirc; trắng đều rơi xuống suối?.</em></strong></p>\n<p><strong><em>GV tr&ecirc;n đ&atilde; sử dụng dạng thức vấn đ&aacute;p n&agrave;o trong số c&aacute;c dạng thức vấn đ&aacute;p sau của Phương ph&aacute;p vấn đ&aacute;p: _________</em></strong></p>',
        answer: 'Vấn đáp củng cố',
        is_answer_distinction: false,
        created_date: moment().unix(),
        created_by: 1,
      },
    ];

    return queryInterface.bulkInsert('question', arr);
  },

  async down(queryInterface, Sequelize) {
    //
  },
};
