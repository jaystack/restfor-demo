const { join } = require('path');
const config = require('config');
const express = require('express');
const createRouter = require('restfor/createRouter');

const init = async () => {
  const router = await createRouter({
    db: config.db,
    collections: ['User', 'Task'],
    schemasPath: join(__dirname, 'schemas'),
    resolversPath: join(__dirname, 'resolvers'),
    modelsPath: join(__dirname, 'models'),
    routesPath: join(__dirname, 'routes')
  });

  const app = express();

  app.use('/api', router);

  app.use('/', express.static('build'));

  app.listen(config.port, () => {
    console.log(`The server is running on port ${config.port}`);
  });
};

init();
