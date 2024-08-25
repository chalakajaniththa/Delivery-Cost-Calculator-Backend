const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController');


// Define the routes for the zones
router.get('/', zoneController.getZones);
router.post('/', zoneController.createZone);
router.get('/:id', zoneController.getZoneById);
router.put('/:id', zoneController.updateZone);
router.delete('/:id', zoneController.deleteZone);

module.exports = router;