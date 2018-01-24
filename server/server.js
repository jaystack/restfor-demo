const express = require('express');
const config = require('config');

const app = express();

app.listen(config.port, () => {
  console.log(config)
  console.log(`The server is running on port ${config.port}`);
});