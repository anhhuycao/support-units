const moment = require('moment');
const db = require('../models');

async function createUnit(data) {
  try {
    data.date = moment().unix();
    return await db.unit.create(data);
  } catch (err) {
    return null;
  }
}

async function findAll(data, done) {
  try {
    return await db.unit.findAll();
  } catch (err) {
    return null;
  }
}

module.exports = { createUnit, findAll };
