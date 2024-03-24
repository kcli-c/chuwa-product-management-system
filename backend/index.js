const express = require('express');
const cors = require('cors')
const authRoutes = require('./routes/auth');
const errorHandler = require('./handlers/error');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Example home page');
})

app.use('/api/auth', authRoutes);

app.use((req, res) => {
    res.status(404).send('this is the 404 page')
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});