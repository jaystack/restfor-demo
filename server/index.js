const { join } = require('path');
const config = require('config');
const express = require('express');
const createRouter = require('restfor/createRouter');

createRouter({
  db: config.db,
  modelsPath: join(__dirname, 'models'),
  routesPath: join(__dirname, 'routes')
}).then(router => {
  const app = express();
  app.use('/api', router);

  app.use('/', express.static('build'));

  app.listen(config.port, () => {
    console.log(`The server is running on port ${config.port}`);
  });
});
