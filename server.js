/* eslint no-console: "warn" */
const express = require('express');
const AWSXRay = require('aws-xray-sdk');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable EC2 plugin
AWSXRay.config([AWSXRay.plugins.EC2Plugin, AWSXRay.plugins.ECSPlugin]);

//app.use(AWSXRay.express.openSegment('hello-node'));

app.get('/', (req, res) => {
  res.send('Hello World!\n');
});

//app.use(AWSXRay.express.closeSegment());

app.listen(PORT, () => {
  console.log('hello-node app listening on port 3000!');
});

module.exports = app;
