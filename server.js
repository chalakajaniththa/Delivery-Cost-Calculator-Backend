const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/db');
const app = express()

//routes

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, This is my first express app.')
})

// const uri = "mongodb+srv://admin:admin123@delivery-cost-calculato.jgdq6.mongodb.net/?retryWrites=true&w=majority&appName=Delivery-Cost-Calculator-Database";

// mongoose.connect(uri).then(() => {
//     console.log('connected to MongoDB')
//     app.listen(3000, ()=> {
//         console.log('Node API app is running on port 3000')
//     });
// }).catch((error) => {
//     console.log(error)
// })

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});