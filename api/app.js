const express = require('express');
const bodyParser = require('body-parser');
const start = require('../api/utils/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 

const app = express();


// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// start database connection
start();


// Middleware
app.use(bodyParser.json());
app.use(express.static("static"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
const userRoutes = require('./routes/userRoutes');

app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to SN3Y team project');
})

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;