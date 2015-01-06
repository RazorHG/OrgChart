var mongoose = require('mongoose');
models = require("./modules/schema.js");
console.log("Loaded");
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	
	var test = new models.Employee({ firstName: 'Ryan' });
	test.addFirstName("Kate");
	test.addLastName("Rogers");
	test.save(function (err, test) {
		if (err) return console.error(err);
	});
	test.display();

});