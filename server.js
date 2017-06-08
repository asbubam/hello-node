/* eslint no-console: "warn" */
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable EC2 plugin
app.get('/', (req, res) => {
  res.send('Hello World!\n');
});

app.listen(PORT, () => {
  console.log('hello-node app listening on port 3000!');
});

module.exports = app;
