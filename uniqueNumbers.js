//Write a function that will take an array of numbers and return a new array that only contains unique numbers.

function unique(array) {
  //declare a new empty array
    const newArray= [];
  
    for (num of array){
      
      //if num not in newArray push it to the array
        if(newArray.indexOf(num) == -1)
        newArray.push(num);
    }
    return newArray;
}

unique([1,1,2,4,5,5,6,1]);
