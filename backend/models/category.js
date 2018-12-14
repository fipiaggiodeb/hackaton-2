var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    description: {type:String, required:false}
  }
);

//Export model
module.exports = mongoose.model('Category', CategorySchema);
