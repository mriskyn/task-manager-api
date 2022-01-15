require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT 3000;
const routes = require('./routes/tasks');
const connectDB = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs');

app.use(express.json());
app.use(express.static('./public'));

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customSiteTitle: 'Task Manager API Docs' })
);
app.use('/api/v1/tasks', routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    app.listen(PORT, () => console.log(`Service running on port:`, PORT));
  } catch (err) {}
};

start();
