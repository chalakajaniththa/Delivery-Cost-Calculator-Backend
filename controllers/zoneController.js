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


exports.getHome = async (req, res) => {
    res.send('Hello Node API')
};

exports.getBlog = async (req, res) => {
    res.send('Hello Blog, This is my first express app.')
};