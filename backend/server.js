require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Route connections
const apiRoutes = require('./app_server/routes/api');

// Set up app init
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});