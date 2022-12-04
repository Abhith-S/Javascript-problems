//Write a function countElements that takes in an array and returns an object a count of each element in the array.
//eg countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}

function countElements(elements) {
  
    var elemCount = {};
  
    for(elem of elements){

        elem in elemCount ? elemCount[elem] += 1 : elemCount[elem] = 1;
    }
  
    return elemCount;
}
const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements);
