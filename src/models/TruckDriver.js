const mongoose = require('mongoose');

const TruckDriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /\d{10,15}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  assignedTruckId: {
    type: Schema.Types.ObjectId,
    ref: 'Truck',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TruckDriver', TruckDriverSchema);