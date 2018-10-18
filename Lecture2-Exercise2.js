// Objects exercise 

// Create three objects 

// All Objects have the same properties 

// Age, Name 


 
 

// Step 1: 

// First object is john 


var Person1 = {
	Age: 22,
	Name: 'John Smith'
}

console.log('Johns age is ..' +Person1.Age);
 

// Step 2: 

// Second object is Ruth 

 var Person2 = {
 	Age: 44,
 	Name: 'Ruth Rendell'
 }
 

// Step 3: 

// Third object is Peter 

var Person3 = {
	Age: 29,
	Name: 'Peter Gabriel'
}
 
 

// Step 4: 

// Add those three objects to an array that you have to create 


var People = [];

People.push(Person1, Person2, Person3);

console.log('Our People are ' +JSON.stringify(People));
 
 

// Step 5: 

// Using the filter method get the younger and older object  

var oldest = People[1].Age;
var youngest = People[0].Age;

console.log('Oldest is ' +oldest);

// if Filter takes a function as an argument?

var OlderPerson = People.filter(function(person) {
	//return person.Age >= oldest;
	if(person.Age >= oldest) {
	  return 1;
	}	
});

var YoungerPerson = People.filter(function(person) {
	//return person.Age >= oldest;
	if(person.Age <= youngest) {
	  return 1;
	}	
});


// Using the reduce method, get the oldest and youngest

var OlderPerson = People.reduce(function(max, x) { 
	if(x.Age > max){
		return x.Age
	} else {
		return max;
	}
}, 0); // without this zero, the first object in the array will be returned (Person1) rather than the actual age value of the oldest (44). Why is this?

/* here is a leaner way to write the code above - using a ternary operator

var OlderPerson = People.reduce(function(max, x) {
	return (x.Age > max) ? x.Age : max;
}, 0);*/

// Step 6: 

// print the values here 

console.log('Oldest must be ' +JSON.stringify(OlderPerson) + ', Youngest must be ' +JSON.stringify(YoungerPerson));
