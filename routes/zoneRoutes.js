const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Node API')
})

router.get('/blog', (req, res) => {
    res.send('Hello Blog, This is my first express app.')
})

module.exports = router;