const mongoose = require('mongoose');

const TruckDriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true },
});

module.exports = mongoose.model('TruckDriver', TruckDriverSchema);