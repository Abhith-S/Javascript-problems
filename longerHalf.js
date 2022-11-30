//a string with 'x' will be given . find the longer half of the string before and after the 'x'

function splitAtX(string) {
  
  //to get lower half slice from index 0 to index of 'x'
    let lower = string.slice(0,string.indexOf('x'));
  
  //to get upper half slice from index of 'x' to end
    let upper = string.slice(string.indexOf('x')+1);

    if(lower.length > upper.length)
    return lower
    else
    return upper
}
splitAtX("haixthere");


