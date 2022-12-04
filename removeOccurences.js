//find all the occurrences of an input number and remove it from the array.

function removeOccurrences(array, num) {
  
    for (let i = array.length - 1; i >= 0; i--){
        if(array[i] === num)
          //splice removes 1 element at index i
        array.splice(i,1);
    }
}

const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
