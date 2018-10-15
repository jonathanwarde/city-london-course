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

// Step 6: 

// print the values here 

console.log('Oldest must be ' +JSON.stringify(OlderPerson) + ', Youngest must be ' +JSON.stringify(YoungerPerson));
