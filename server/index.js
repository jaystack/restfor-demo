const { join } = require('path');
const config = require('config');
const express = require('express');
const createRouter = require('restfor/createRouter');
const createGraphqlRouter = require('restfor/lib/graphql');

createRouter({
  db: config.db,
  modelsPath: join(__dirname, 'models'),
  routesPath: join(__dirname, 'routes')
}).then(router => {
  const app = express();
  app.use('/api', router);

  app.use(
    '/',
    createGraphqlRouter({
      db: config.db,
      schemasPath: join(__dirname, 'schemas'),
      resolversPath: join(__dirname, 'resolvers')
    })
  );

  app.use('/', express.static('build'));

  app.listen(config.port, () => {
    console.log(`The server is running on port ${config.port}`);
  });
});
