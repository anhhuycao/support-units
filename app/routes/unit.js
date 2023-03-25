const router = require('express')();
const { validationResult } = require('express-validator');
const { postUnit } = require('../validations/unit');
const { createUnit } = require('../services/unit');

router.post('/unit', postUnit, async function (req, res) {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const result = await createUnit(req.body);

      return res.status(201).json({ code: 201, success: true, message: 'Ok', data: result });
    }
    return res.status(400).json({ code: 400, success: true, message: 'Not ok', data: errors.array() });
  } catch (err) {
    res.status(500).json({ code: 500, success: false, message: 'System error', data: null });
  }
});

module.exports = router;
