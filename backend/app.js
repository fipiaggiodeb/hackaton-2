var express = require('express');
var app = express();

//Import the mongoose module
var mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

//Set up default mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/database1', option).then(function(){
    //connected successfully
    console.log('Successfully connected to database');
}, function(err) {
    //err handle
    console.log('Not connected to database ' + err);
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var async = require('async')
var Category = require('./models/category')
var Product = require('./models/product')

/*--------------------------Prueba--------------------------------------*/
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/*-------------------------Category-------------------------------------*/
//Ceate category
app.post('/category/create',function(req,res){
	var category = new Category(req.body);
	category.save(function (err){
		if(err){
			return res.status(500).send('Error al crear la categoría');
		}
		console.log('Categoría creada exitosamente');
		return res.status(200).send();
	});
});
//Find category
app.get('/category',function(req,res){
	Category.find({},function(err,docs){
		if(err){
			return res.status(500).send('Error al listar categorías');
		}
		return res.status(200).send(docs);
	});   
});
/*---------------------------------Order----------------------------------------*/
//Ceate order
app.post('/order/create',function(req,res){
    var order = new Order(req.body);
    order.save(function (err){
        if(err){
            return res.status(500).send('Error al crear el pedido');
        }
        console.log('Pedido creado exitosamente');
        return res.status(200).send();
    });
});

/*--------------------------Levanto la app--------------------------------------*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

/*--------------------------Product APIs--------------------------------------*/
app.get('/product/:category', function(req, res){
	Product.find({"category":req.params.category}, function(err,docs){
		if(err){
			return res.status(500).send('No se pudo encontrar el producto');
		}
		return res.status(200).send(docs);
	});
});

app.get('/product', function(req, res){
	Product.find({}, function(err,docs){
		if(err){
			return res.status(500).send('No se pudo encontrar el producto');
		}
		return res.status(200).send(docs);
	});
});

app.post('/product/create', function(req, res){
	var product = new Product(req.body);
	product.save(function(err){
	if(err){
		return res.status(500).send('No se pudo crear el pedido;');
	}
	return	res.status(200).send('Producto creado exitosamente');
	});
});
