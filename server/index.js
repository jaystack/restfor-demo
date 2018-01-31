const { join } = require('path');
const config = require('config');
const express = require('express');
const createRouter = require('restfor/createRouter');
const createGraphqlRouter = require('restfor/lib/graphql');

const init = async () => {
  const router = await createRouter({
    db: config.db,
    modelsPath: join(__dirname, 'models'),
    routesPath: join(__dirname, 'routes')
  });

  const graphqlRouter = await createGraphqlRouter({
    db: { ...config.db, alterOnSync: true },
    collections: ['User', 'Task'],
    schemas: join(__dirname, 'schemas.gql'),
    modelsPath: join(__dirname, 'models'),
    resolvers: require('./resolvers.js')
  });

  const app = express();
  app.use('/api', router);

  app.use('/', graphqlRouter);

  app.use('/', express.static('build'));

  app.listen(config.port, () => {
    console.log(`The server is running on port ${config.port}`);
  });
};

init();
