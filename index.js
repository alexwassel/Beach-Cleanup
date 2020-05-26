const express = require('express');
const app = express();
const port = 3000;
const request = require('request')
const fs = require("fs");

app.use(express.static('docs'));

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
})

app.listen(port, () => console.log(`Digital Ocean app listening on port ${port}!`))
