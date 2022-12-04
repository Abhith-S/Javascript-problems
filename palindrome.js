//Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

function isPalindrome(string) {
  
  //splits the string into an array of individual characters
    strArray = (string.split(""));
  
  //reverses the array and then joins it to form a string
    var revString = (strArray.reverse()).join("");

    return (revString == string ? true : false);
}
