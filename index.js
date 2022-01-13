const express = require('express');
const app = express();
const PORT = 3000
const routes = require('./routes/tasks');

app.use(express.json());

app.use('/api/v1/tasks', routes);

app.listen(PORT, () => console.log(`Service running on port:`, PORT));
