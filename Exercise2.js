// Objects exercise 

// Create three objects 

// All Objects have the same properties 

// Age, Name 

 
 

// Step 1: 

// First object is john

var John = {
	Age: 22,
	Name: 'John Carpenter'
};

 
 

// Step 2: 

// Second object is Ruth 

var Ruth = {
	Age: 65,
	Name: 'Ruth Rendell'
};
 
console.log('Ruths age is ' +Ruth.Age);
console.log('Ruths full name iss ' +Ruth.Name);

// Step 3: 

// Third object is Peter 

var Peter = {
	Age: 17,
	Name: 'Peter Gabriel'
};
 

// Step 4: 

// Add those three objects to an array that you have to create 

var Names = [];
Names.push(John, Ruth, Peter);

// Step 5: 

// Using the filter method get the younger and older object  

var youngestAndOldest = Names.filter(function(youngest, oldest){


	/*if (ages[i] > older) {
        older = ages[i];
    }

    if (ages[i] < younger) {
        younger = ages[i];
    }*/

});

console.log('Youngest and oldest are ' +youngestAndOldest);

// Step 6: 

// print the values here