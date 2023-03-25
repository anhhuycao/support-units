const jwt = require('jsonwebtoken');
const config = require('../config/app');
const logger = require('../utils/logger')(module);

module.exports = function (req, res, next) {
  try {
    const { token } = req.headers;
    const { app_id } = jwt.decode(token);

    jwt.verify(
      token,
      config[app_id].secret,
      { algorithms: config[app_id].algorithm, maxAge: config[app_id].expires },
      function (err) {
        if (err) {
          return res.status(401).json({ code: 401, success: false, message: err });
        }
        next();
      }
    );
  } catch (err) {
    logger.error('[Authentication]: ', err);
    return res.status(400).json({ code: 400, success: false, message: err });
  }
};
