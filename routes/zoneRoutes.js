const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController');

router.get('/', zoneController.getHome);
router.get('/blog', zoneController.getBlog);

module.exports = router;