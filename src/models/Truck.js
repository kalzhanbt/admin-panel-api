const mongoose = require('mongoose');

const TruckSchema = new mongoose.Schema({
    registeredPlate: { type: String, required: true },
    type: { type: String, required: true },
    VIN: { type: String, required: true },
});

module.exports = mongoose.model('Truck', TruckSchema);