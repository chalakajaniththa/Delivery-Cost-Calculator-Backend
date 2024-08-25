const mongoose = require('mongoose');

const SuburbSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    postalCodes: {
        range: {
            start: { type: String },
            end: { type: String }
        },
        single: { type: String },
        list: [String]
    },
    delivery_costs: {
        fixed: {
            thresholds: {
                "60": { type: Number },
                "100": { type: Number }
            },
            above_threshold: { type: Number }
        },
        weights: {
            type: Map,
            of: {
                thresholds: {
                    "60": { type: Number },
                    "100": { type: Number }
                },
                above_threshold: { type: Number }
            }
        }
    },
    pickup_options: {
        thresholds: {
            "60": { type: Number },
            "100": { type: Number }
        },
        above_threshold: { type: Number }
    }
});

const CitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    suburbs: [SuburbSchema]
});

const ZoneSchema = new mongoose.Schema({
    zoneName: { type: String, required: true },
    postalCode: { type: String, required: true },
    cities: [CitySchema]
});

const Zone = mongoose.model('Zone', ZoneSchema);

module.exports = Zone;