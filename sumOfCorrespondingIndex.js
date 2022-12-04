//Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.

function sumTogether(arr1, arr2) {
  
    var sumArray = [];
  
    for(i =0; i<arr1.length; i++){
      
        sumArray.push(arr1[i]+arr2[i]);
    }
  
    return sumArray;
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

sumTogether(arr1, arr2);
