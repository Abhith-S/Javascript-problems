//Find the longest word in a sentence

//declare a fucntion that takes a sentence as arguement
function findLongestWord(sentence){
    
    console.log(`sentence : " ${sentence} "`);
    
    //using split() to split sentence into seperate word, the splitting happens at every space " ".
    //the split function returns an array of words stored in 'words'
    let words = sentence.split(" ");
    
    //just declare a string variable as longestWord
    let longestWord = "";
    
   //iterate through the words array
   for (let word of words){
       
       //check if lenght of word is greater than length of longestWord
       if(word.length > longestWord.length){
           
           //set longestWord as value inside word
           longestWord = word;
       }
   }
   return longestWord;
}

console.log("longest word is : "+findLongestWord("Hey guys lets learn javascript"));
console.log(" ");
console.log("longest word is : "+findLongestWord("Quitting is not an option"));
