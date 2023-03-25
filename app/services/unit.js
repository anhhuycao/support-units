const moment = require('moment');
const db = require('../models');

async function createUnit(data) {
  try {
    data.date = moment().unix();
    console.log(data);
    const temp = await db.unit.create(data);
    console.log(temp);
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
