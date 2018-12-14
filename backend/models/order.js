var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema(
  {
    date: 		{type: Date, default: Date.now, required: true},
    sender: 	{type: String, required: true},
    recipient: 	{type: String, required: true},
    comments: 	{type: String, required: false},
    products: 	[ProductSchema]
  }
);

//Export model
module.exports = mongoose.model('Order', OrderSchema);
