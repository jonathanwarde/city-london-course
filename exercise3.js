// Exercise 3

var obj = {
	total: 0,
	add: function(number){
		return this.total + number;
	},
	subtract: function(number){
		return this.total - number;
	},
	increment: function(){
		return this + 1;
	},
	decrement: function(){
		return this - 1;
	},
	getTotal: function(){
		return this.total;
	}
}