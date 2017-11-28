var mongoose = require('mongoose');
var User = require('./user.js');
var Schema = mongoose.Schema;

var PininterestSchema = mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

var Pininteres = module.exports = mongoose.model('pininteres', PininterestSchema);