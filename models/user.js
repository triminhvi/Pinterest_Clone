var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Pinterest = require('./pinterest');
var Schema = mongoose.Schema;
var saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var UserSchema = new Schema({
  local: {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type:String,
      required: true
    },
    pinInterests: [{
      type: Schema.Types.ObjectId,
      ref: 'pinterest'
    }]
  }
})

UserSchema.methods.genHash = function(saltRounds){
  return bcrypt.hashSync(password, salt);
}

UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(passwod, this.local.password);
}

var User =module.exports = mongoose.model('user', UserSchema);