const express = require('express');
const connectDB = require('./config/db');
const zoneRoutes = require('./routes/zoneRoutes');

const app = express();

/// Routes
app.use('', zoneRoutes);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});