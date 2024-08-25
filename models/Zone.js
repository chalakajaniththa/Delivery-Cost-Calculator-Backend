const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Suburb Schema
const suburbSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postalCodes: {
    range: {
      start: String,
      end: String,
    },
    single: String,
    list: [String],
  },
  delivery_costs: {
    fixed: {
      thresholds: {
        "60": Number,
        "100": Number,
      },
      above_threshold: Number,
    },
    weights: {
      type: Map,
      of: new Schema({
        thresholds: {
          "60": Number,
          "100": Number,
        },
        above_threshold: Number,
      }),
    },
  },
  pickup_options: {
    thresholds: {
      "60": Number,
      "100": Number,
    },
    above_threshold: Number,
  },
});

// Define City Schema
const citySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  suburbs: [suburbSchema],
});

// Define State Schema
const stateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cities: [citySchema],
}, { timestamps: true });

// Create the State Model
const Zone = mongoose.model('State', stateSchema);

module.exports = Zone;