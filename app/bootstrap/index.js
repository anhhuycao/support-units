const cors = require('cors');
const app = require('express')();
const bodyParser = require('body-parser');
const distance = require('../routes/distance');
const { express } = require('../config/app');
const logger = require('../utils/logger')(module);

app.use(cors({ origin: '*', methods: ['GET', 'PUT', 'POST'] }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ limit: '50MB' }));
app.use('/api/v1/', distance);

app.listen(express.port, '0.0.0.0', () => {
  logger.info('Start server successfully at port %s', express.port);
  console.info(`App listening at port: ${express.port}`);
});