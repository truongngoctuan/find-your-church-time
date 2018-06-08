var stateOptions = require("./data/common.js");
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send(stateOptions);
});

app.listen(port, () => console.log(`Listening on port ${port}`));