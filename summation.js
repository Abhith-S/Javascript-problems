//write a function summation that will find the sum of all the values from 1 to a range. The value range is passed into our function.

function summation(range) {
    let sum = 0;

    for (let i=1; i<=range; i++) {
        sum += i;
    }

    return sum;
}

summation(10);
