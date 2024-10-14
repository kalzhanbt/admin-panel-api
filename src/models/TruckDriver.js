const mongoose = require('mongoose');

const { Schema } = mongoose; 

const TruckDriverSchema = new Schema({
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
        return /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Must be in a valid format.`
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