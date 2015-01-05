function employee(first, last, middle, departments, email, skype, jobtitle) {
    this.firstName = first;
    this.lastName = last;
    this.middle = middle || "";
    this.departments = departments;
	this.email = email;
	this.skype = skype;
	this.jobtitles = jobtitles;
}