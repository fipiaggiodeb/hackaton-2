var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TypeSchema = new Type(
  {
    name: {type: String, required: true, unique: true}
  }
);

//Export model
module.exports = mongoose.model('Type', TypeSchema);
