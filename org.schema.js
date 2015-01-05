var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

	var employeeSchema = mongoose.Schema({
		firstName : String,
		lastName : String,
		middleName : { type: String, required: false},
		departments : String,
		email: String,
		skype: String,
		jobtitles: String
	});
	
	employeeSchema.methods.display = function () {
		var showname = "Name is " + this.firstName;
		console.log(showname);
	}
	
	var Employee = mongoose.model('Employee', employeeSchema)
	var test = new Employee({ firstName: 'Kevin' })
	test.display();
  
  
});



