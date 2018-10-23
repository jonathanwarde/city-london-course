// Lesson 3, Exercise 2b
// In workshop3.js,use bind() to amend the code from so that:
// The test() function returns the value: Tom.
// A new function is created as a copy of getName(callittest2) which will return the value: Jane.
// Hint: It is all about which object you bind the method to!

var fullname = "John";
var obj = {
	fullname: "Jane",
	prop: {
		fullname: "Tom",
		getName: function () {
			return this.fullname;
		}
	}
};

// Copy the function
var test = obj.prop.getName;

// What does the console display?
// A: TOM, as 'this' is scoped to the prop within the object
console.log(obj.prop.getName());

// Here it will display John since we are copying the boject and so the "this" becomes the global "this"
// A: JOHN
console.log(test());

// Using 'bind' amend 'test' so that it outputs 'Jane'

var testBound = obj.prop.getName.bind(obj);

console.log('This should now output Jane :' +testBound());
