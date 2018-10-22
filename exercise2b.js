// Lesson 3, Exercise 2b

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

// A: JOHN
console.log(test());

// Using 'bind' amend 'test' so that it outputs 'Tom'

var testBound = test.bind(obj.prop);

console.log(testBound());
