'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World!\n');
});

app.listen(PORT, () => {
	console.log('hello-node app listening on port 3000!');
});

