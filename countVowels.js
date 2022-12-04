//Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".
//Handle lowercase and uppercase vowels.

const vowels = ["a","e", "i", "o","u"];
function countVowels(str) {

    var count = 0;
    
    for (let char of str){
    
        if(vowels.indexOf(char.toLowerCase()) != -1)
        
        //or
        //if(vowels.includes(char.toLowerCase()) == true)
        
        count++;
    }
    
    return count;
}

countVowels("haithere");
