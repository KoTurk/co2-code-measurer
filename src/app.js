const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/@tgwf', express.static(__dirname + '/../node_modules/@tgwf'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});