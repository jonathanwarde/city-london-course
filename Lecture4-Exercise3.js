// Variables used by script.
// We need references to the textarea, the button and the div to place the results in
var userInput = document.getElementById('user-input'),
   saveButton = document.getElementById('btn'),
   resultEl = document.getElementById('saved-text'),
   newDescription = new CustomEvent('customDescription', {detail: {"description": "This is a P tag"}});

// Helper function to help keep code clean...
// All it does is make a button element, which we then add to each of the p
// elements we add to the page
function makeMasterDeleteButton() {
   var btn = document.createElement('a');
   btn.textContent = 'X';
   btn.classList.add('item-delete'); // give button the class "item-delete"
   btn.setAttribute('href', '#');
   return btn;
}

// add event handler for custom event # 1 onto the document
document.addEventListener('newDescription', function(){
  //console.log("Element text is: " + e.detail.el.textContent);
  console.log('dispatched?');
});


// Make sure we have valid elements to work with
if (userInput !== null && saveButton !== null && resultEl !== null) {

   // Listen for clicks on form button
   saveButton.addEventListener('click', function (event) {

       var newNode, // Element we will create
           itemDeleteButton, // Delete button for element
           submitted = userInput.value; // Text from form field
           

       // Check if user entered something
       if (submitted !== '') {

           // Make a p element and add the submitted text to it
           newNode = document.createElement('p');
           newNode.textContent = submitted;
    
           console.log(newDescription.detail.description);

           // Make a delete button element and append it to p element
           itemDeleteButton = makeMasterDeleteButton();
           newNode.insertAdjacentElement('afterbegin', itemDeleteButton);

           // add the p element to the page
           resultEl.appendChild(newNode);

           // Erase user's text from the textarea
           userInput.value = '';
       }

       // Stop the browser's default behaviour. By default, when a "button" within a "form"
       // element is clicked, the form gets submitted, resulting in a page reload (which we don't want)
       event.preventDefault();
   }); 

   // Dispatch the custom event. Make sure you spell "dispatch" correctly or you could waste an entire hour like an idiot
  document.dispatchEvent(newDescription);

   // Add event listener for item deletions here...

   resultEl.addEventListener('click', function(event){
       console.log('delete button clicked'); 
      if(event.target.classList.contains('item-delete')){
        event.preventDefault(); 
        resultEl.removeChild(event.target.parentNode);
      }
   });

}
