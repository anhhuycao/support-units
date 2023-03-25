const moment = require('moment');
const db = require('../models');
const logger = require('../utils/logger')(module);
const { DISTANCE_UNIT, TEMPERATURE_UNIT } = require('../constants');

async function createUnit(data) {
  try {
    data.date = moment().unix();
    return await db.unit.create(data);
  } catch (err) {
    logger.error(err);
    return null;
  }
}

async function findAll(data) {
  try {
    const { type, unit, from_date, to_date } = data;
    const condition = {};

    if (type) {
      condition.type = type;
    }
    if (from_date && to_date) {
      condition.date = { $gte: from_date, $lte: to_date };
    }
    const records = await db.unit.findAll({ where: condition, raw: true });

    if (unit) {
      const finalRecords = records.map((record) => {
        switch (parseInt(unit)) {
          case DISTANCE_UNIT.METER:
            return record;
          case DISTANCE_UNIT.CENTIMETER:
            return { ...record, value: record.value * 100 };
          case DISTANCE_UNIT.INCH:
            return { ...record, value: record.value * 39.3700787402 };
          case DISTANCE_UNIT.FEET:
            return { ...record, value: record.value * 3.280839895 };
          case DISTANCE_UNIT.YARD:
            return { ...record, value: record.value * 1.0936132983 };
          case TEMPERATURE_UNIT.C:
            return record;
          case TEMPERATURE_UNIT.F:
            return { ...record, value: (record.value * 9) / 5 + 32 };
          case TEMPERATURE_UNIT.K:
            return { ...record, value: record.value + 273.15 };
        }
      });

      return finalRecords;
    }
    return records;
  } catch (err) {
    logger.error(err);
    return null;
  }
}

module.exports = { createUnit, findAll };
