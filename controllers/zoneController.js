const Zone = require('../models/Zone');

// Get all zones
exports.getZones = async (req, res) => {
    try {
        const zones = await Zone.find();
        res.status(200).json(zones);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving zones', error: error.message });
    }
};

// Create a new zone
exports.createZone = async (req, res) => {
    try {
        const newZone = new Zone(req.body);
        const savedZone = await newZone.save();
        res.status(201).json(savedZone);
    } catch (error) {
        res.status(500).json({ message: 'Error creating zone', error: error.message });
    }
};

// Get a single zone by ID
exports.getZoneById = async (req, res) => {
    try {
        const zone = await Zone.findById(req.params.id);
        if (!zone) {
            return res.status(404).json({ message: 'Zone not found' });
        }
        res.status(200).json(zone);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving zone', error: error.message });
    }
};

// Update an existing zone
exports.updateZone = async (req, res) => {
    try {
        const updatedZone = await Zone.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedZone) {
            return res.status(404).json({ message: 'Zone not found' });
        }
        res.status(200).json(updatedZone);
    } catch (error) {
        res.status(500).json({ message: 'Error updating zone', error: error.message });
    }
};

// Delete a zone
exports.deleteZone = async (req, res) => {
    try {
        const deletedZone = await Zone.findByIdAndDelete(req.params.id);
        if (!deletedZone) {
            return res.status(404).json({ message: 'Zone not found' });
        }
        res.status(200).json({ message: 'Zone deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting zone', error: error.message });
    }
};