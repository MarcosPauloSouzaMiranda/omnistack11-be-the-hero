const express = require('express');

const app = express();

app.get('/contato', (req, res) => {
  res.send('Contato!');
});

app.listen(3333);