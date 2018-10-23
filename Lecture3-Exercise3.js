// Exercise 3

// An example of how chaining works

// fluent APIs return the "this" object to allow a chain to continue

// Only the getTotal method should return an actual value. Every other method returns the "this" object. 
// As we are chaining we pass on the modified "this" object to the next method in the chain

var obj = {
	total: 0,
	add: function(number){
		this.total += number;
		return this;
	},
	subtract: function(number){
		this.total -= number;
		return this;
	},
	increment: function(){
		this.total ++;
		return this;
	},
	decrement: function(){
		this.total --;
		return this;
	},
	getTotal: function(){
		return obj.total;
	}
}

chainedMethods1 = obj.increment().increment().subtract(5).getTotal();
console.log('Result should be -3 :' +chainedMethods1);
