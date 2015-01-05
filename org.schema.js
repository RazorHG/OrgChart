var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {

	var employeeSchema = mongoose.Schema({
		firstName : String,
		lastName : String,
		middleName : { type: String, required: false},
		departmentName : String,
		email: String,
		skype: String,
		jobtitle: String
	});
	employeeSchema.methods.display = function () {
		var showname = "Name is " + this.firstName;
		console.log(showname);
	}
	employeeSchema.methods.addFirstName = function ( first ) {
		this.firstName = first;
	}
	employeeSchema.methods.addLastName = function ( last ) {
		this.lastName = last;
	}
		employeeSchema.methods.addMiddleName = function ( middle ) {
		this.middleName = middle;
	}
		employeeSchema.methods.addDepartment = function ( department ) {
		this.departmentName = department;
	}
		employeeSchema.methods.addemail = function ( email ) {
		this.email = email;
	}
		employeeSchema.methods.addskype = function ( skype ) {
		this.skype = skype;
	}
		employeeSchema.methods.addjobtitle = function ( jobtitle ) {
		this.jobtitle = jobtitle;
	}
	var Employee = mongoose.model('Employee', employeeSchema)
	
	
	
	var departmentSchema = mongoose.Schema({
		name : String
	});
	
	var jobtitlesSchema = mongoose.Schema({
		name : String
	});	
	
	var Departments = mongoose.model('Departments', departmentSchema)
	var JobTitles = mongoose.model('JobTitles', jobtitlesSchema)
	
	var test = new Employee({ firstName: 'Steve' })
	test.save(function (err, test) {
		if (err) return console.error(err);
	});
	test.display();
  
  
});



