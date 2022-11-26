//Taking in some integer value n, find the factorial for that number.
//eg factorial of 5 = 5*4*3*2*1 = 120

function factorial(n) {
    let fact = 1;
    for(let i = 1; i<=n; i++){
        fact *= i;
    }
    return fact;
}
factorial(6);
