const express = require('express');
const config = require('config');

const app = express();

app.use(express.static('build'));

app.listen(config.port, () => {
  console.log(`The server is running on port ${config.port}`);
});

