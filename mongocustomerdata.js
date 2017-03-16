var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.


var customerSchema = new mongoose.Schema({
  id:Number, 
  name: { type: String }
, address: String
, phonenumber: Number
});



// Compile a 'customer' model using the customerSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Customers' for these documents.


var Customer = mongoose.model('Customer', customerSchema);

var customerdata = new Customer({
  id: 1234
, name: 'Amala'
, address: 'Chennai'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
, phonenumber: 1234567
});

customerdata.save(function(err, customerdata) {
  if (err) return console.error(err);
  console.dir(customerdata);
});


// Find a single customer by name.
Customer.findOne({ id: 1234}, function(err, customerdata) {
  if (err) return console.error(err);
  console.dir(customerdata);
});

// Find all customers.
Customer.find(function(err, customers) {
  if (err) return console.error(err);
  console.dir(customers);
});

});

mongoose.connect('mongodb://localhost/Customer');