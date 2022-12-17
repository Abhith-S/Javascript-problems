//Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

//Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

function fizzBuzz(numbers) {

    let str = "";

    for(let num of numbers){

        if(num % 5 === 0 && num % 3 === 0)
            str += "fizzbuzz";
        else if(num % 3 === 0)
            str += "fizz";
        else if (num % 5 === 0)
            str += "buzz";
    }

    return str;

}


const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"
