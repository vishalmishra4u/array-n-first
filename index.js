var isNumber = require('is-number');

module.exports = function first(arr, index1 = 0, index2){
  if(!Array.isArray(arr)){
    throw new Error('array-n-first expects first arguement as an array.');
  }

  if(arr.length === 0){
    return null;
  }

  var firstN = firstN(arr, 0, isNumber(index2) ? index2 : 0);

  return firstN;
}

function firstN(arr, index1, index2){
  var tempArray = [];
  for(var i = index1; i < index2 + 1;i++){
    tempArray.push(arr[i]);
  }

  return tempArray;
}
