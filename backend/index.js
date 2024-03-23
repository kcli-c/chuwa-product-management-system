const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send('Example home page');
})

app.use((req, res) => {
    res.status(404).send('this is the 404 page')
})

app.listen(8000, () => {
  console.log('Server listening on 8000');
});