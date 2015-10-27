var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var StationSchema = new Schema({
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
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Station', StationSchema);

