//create a function scream which will take in a value n and return a string with the letter "a" and "A" repeated alternating that many times. For example:
//console.log( scream(5) ); // aAaAa
//console.log( scream(10) ); // aAaAaAaAaA

function scream(n) {
    let str = "";
    for(let i=1; i<=n; i++){
      
      //for odd positions use 'a'
        if(i%2 == 1)
        str += "a";
      
      //for even positions use 'A'
        else
        str += "A";
    }
    return str;
}

scream(5);
