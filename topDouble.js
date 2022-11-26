//The goal is to double a value until just before it reaches a top.

//Let's say our value is 2 and our top is 100. We would double it like so: 2, 4, 8, 16, 32, 64 but not 128 as it is greater than our top 100

//find the largest double for the value that is below the top.

function topDouble(value, top) {
    
  //loop while double of value is less than top
    while(value*2 < top){
        value *= 2;
    }
    return value;
}

topDouble(5,100);
