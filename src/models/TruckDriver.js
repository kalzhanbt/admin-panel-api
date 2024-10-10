const mongoose = require('mongoose');

const TruckDriverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  // Добавьте другие поля по необходимости
});

module.exports = mongoose.model('TruckDriver', TruckDriverSchema);