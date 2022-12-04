//Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.

function reverse(string) {
  
    var newString = "";
  
    for(let i = string.length-1; i>=0; i--){
      
        newString += string[i];
    }
  
    return newString;
}

reverse("thenes");
