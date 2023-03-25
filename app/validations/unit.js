const { body } = require('express-validator');
const { TYPE_UNIT } = require('../constants');

const postUnit = [
  body('value').notEmpty().isInt(),
  body('type').notEmpty().isIn([TYPE_UNIT.DISTANCE, TYPE_UNIT.TEMPERATURE]),
];

module.exports = { postUnit };
