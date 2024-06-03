const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  }
});

module.exports = mongoose.model('User', userSchema);
