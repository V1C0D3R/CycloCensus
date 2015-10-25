var mongoose = require('mongoose');

var StationSchema = new mongoose.Schema({
  number: Number,
  name: String,
  address: String,
  position: {lat: Number, long: Number},
  banking: Boolean,
  status: String,
  contract_name: String,
  available_bike_stands: Number,
  available_bikes: Number,
  note: String,
  last_update: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', TodoSchema);