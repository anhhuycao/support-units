const router = require('express')();
const { postUnit } = require('../validations/unit');
const { createUnit } = require('../services/unit');

router.post('/unit', postUnit, async function (req, res) {
  try {
    createUnit(req.body);
  } catch (err) {
    res.status(400).json({ code: 400, success: false, message: err, data: null });
  }
});

module.exports = router;
