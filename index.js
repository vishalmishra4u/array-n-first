var isNumber = require('is-number');

module.exports = {
  first : first,
  midN : midN,
  getElements : getElements
};

function first(arr){
  if(!Array.isArray(arr)){
    throw new Error('array-n-first expects first arguement as an array.');
  }

  if(arr.length === 0){
    return null;
  }

  return getElements(arr, 0, 1);
}

function midN(arr, index1 = 0, index2){
  if(!Array.isArray(arr)){
    throw new Error('array-n-first expects first arguement as an array.');
  }

  if(!isNumber(index1) || isNumber(index2)){
    throw new Error('Indexes must be an integer');
  }

  if(arr.length === 0){
    return null;
  }

  return getElements(arr, isNumber(index1) ? index2 : 0, isNumber(index2) ? index2 : 0);
}

function getElements(arr, index1, index2){
  var tempArray = [];
  for(var i = index1; i < index2 + 1;i++){
    tempArray.push(arr[i]);
  }

  return tempArray.length == 1 ? tempArray[0] : tempArray;
}
