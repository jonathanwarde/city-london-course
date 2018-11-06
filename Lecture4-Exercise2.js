// The element to attach the listener to
var buttonWrapper = document.getElementById('button-wrapper');

buttonWrapper.addEventListener('click', function(){
	var attr = event.target.getAttribute('data-action');
	console.log('Current click target is ' +event.target);
	console.log(attr);
});
