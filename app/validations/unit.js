const { body, query } = require('express-validator');
const { TYPE_UNIT, DISTANCE_UNIT, TEMPERATURE_UNIT } = require('../constants');

const validatorPostUnit = [
  body('value').notEmpty().isInt(),
  body('type').notEmpty().isIn([TYPE_UNIT.DISTANCE, TYPE_UNIT.TEMPERATURE]),
];

const validatorGetUnit = [
  query('type').optional().isIn([TYPE_UNIT.DISTANCE, TYPE_UNIT.TEMPERATURE]),
  query('unit')
    .optional()
    .isIn([
      DISTANCE_UNIT.CENTIMETER,
      DISTANCE_UNIT.FEET,
      DISTANCE_UNIT.INCH,
      DISTANCE_UNIT.METER,
      DISTANCE_UNIT.YARD,
      TEMPERATURE_UNIT.C,
      TEMPERATURE_UNIT.F,
      TEMPERATURE_UNIT.K,
    ]),
  query('from_date').optional().isInt(),
  query('to_date').optional().isInt(),
];

module.exports = { validatorPostUnit, validatorGetUnit };
