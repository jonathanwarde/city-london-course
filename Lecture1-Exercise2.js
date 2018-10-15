// Step 1: Declare the var names Ruth, John, Peter 

// Write your code here 

var names = ["Ruth", "John", "Ancient Annie", "Peter", "Tiny Eric"];

 
// Step 2: Declare the var ages 70, 21, 65 

// Write your code here 

var ages = [70, 21, 78, 56, 6];
 

// Step 3 Fillin the logic for our function 

function calculateYoungerAndElder(names, ages) { 

    // Step 4: Initialise the two variables that will hold the older and younger variables 

    // Write your code here 

    var older = ages[0];
    var younger = ages[0];

    console.log('Younger is ' +younger);
    console.log('older is ' +older);
 

    // Step 5: Initialise an empty array called output that will hold the older and younger values 

    // Write your code here 

    var output = [];

    // Step 6: Write a for loop that will iterate through ages array  

    // and check what is the highest and lowest value 

    for (i = 0; ages.length > i; i++) {

	    if (ages[i] > older) {
	        older = ages[i];
	    }

	    if (ages[i] < younger) {
	        younger = ages[i];
	    }
	}


   
    // Step 7: Print in console the older and younger index is it correct? 

    console.log('Index of Oldest is ' +ages.indexOf(older)); 
    console.log('Index of Youngest is ' +ages.indexOf(younger)); 

    indexOfOlder = ages.indexOf(older);
    console.log('index of older ' +indexOfOlder);
    nameOfOlder = names[indexOfOlder];
    console.log('name of older ' +nameOfOlder);

    indexOfYounger = ages.indexOf(younger);
    console.log('index of younger ' +indexOfYounger);
    nameOfYounger = names[indexOfYounger];
    console.log('name of younger ' +nameOfYounger);


    // Step 8: A function can return only a single value if you had to output the two values 

 	output.push(nameOfOlder, older, nameOfYounger, younger);

    // Step 9: Add the older value first on the output array 

    return output; 

} 

 

// Step 10: This call will output the result on our console. 

var output = calculateYoungerAndElder(names, ages); 

 

// Step 11: Check the values 

console.log('Final output of Oldest and Youngest is ' +output);
