const express = require('express');
const app = express();
const port = 80; // Puerto en el que el servidor escuchará

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
