const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController');


// Define the routes for the zones
router.get('/', zoneController.getZones);
router.post('/', zoneController.createZone);
router.get('/home', zoneController.getHome);
router.get('/blog', zoneController.getBlog);

module.exports = router;