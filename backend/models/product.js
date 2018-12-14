var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
	{
		name: {type: String, required: true},
		sku:  {type: String, required: true, unique: true},
		amount: {type: String, required: true},
		image: {type: String, required:false},
		category: {type: Schema.Types.ObjectId, ref:'Category', required: true} 
	}
);

//Export model
module.exports = mongoose.model('Product', ProductSchema);