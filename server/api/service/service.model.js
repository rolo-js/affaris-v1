'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  name: String,
  info: String,
  stdCostPerHour: Number,
  stdPricePerHour: Number,
  active: Boolean
});

module.exports = mongoose.model('Service', ServiceSchema);
