//Capitalize a given name. eg) alex -> Alex, GeorGE -> George

//declaring string variable called name 
var name = '';

//function to capitalize
function capitalize(name) {
  
  //convert name to all lower case
   var lower = name.toLowerCase();
  
  //return a value with first letter uppercase and the rest lowercase
   return `${lower[0].toUpperCase()}${lower.substring(1)}`
}

//call the function by passing a parameter.

capitalize('jack');
