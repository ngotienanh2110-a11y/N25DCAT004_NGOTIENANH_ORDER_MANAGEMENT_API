const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

// ket noi MomgoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.error('Connection error:', err));

    // Route kiem tra server
    app.get('/', (req, res) =>{
        res.send('API Quan ly don hang dang hoat dong...');
    } );

    // Khoi chay server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT,  ()  => {
        console.log('Server is running on port ${PORT}');
    });