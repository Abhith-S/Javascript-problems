 //find the sum of all even values inside the array
 
 function sumEven(array) {
   let sum = 0;
    for (num of array){
        if(num % 2 == 0)
        sum += num;
    }
    return sum;
}

sumEven([1,2,3,4,5,6]);
