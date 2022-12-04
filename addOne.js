//program to add 1 to every element within the array
function addOne(array) {
  
    for(num of array){
        //num is every element of array, indexOf(num) will be the index of that element
        array[array.indexOf(num)]++;
    }
}

addOne([1,2,4,5,9]);
