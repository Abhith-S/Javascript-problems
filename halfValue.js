//The function halfValue takes an array of numbers. It should return a new array with all the original values halved.
//Odd numbers should be rounded up to the nearest whole number.

function halfValue(numbers) {
  
    var newArray = [];
  
    for(let num of numbers){
      //round off to avoid floats
       newArray.push(Math.round(num/2));
    }
    return newArray;
}

const numbers = [1,2,4,5,8,3];
halfValue(numbers);
