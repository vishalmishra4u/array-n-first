var isNumber = require('is-number');

module.exports = {
  first : first,
  midN : midN,
  getElements : getElements,
  checkInputValidity : checkInputValidity
};

function first(arr){
  if(!Array.isArray(arr)){
    throw new Error('array-n-first expects first arguement as an array.');
  }

  checkInputValidity(arr, position1, position2);
  return getElements(arr, 0, 1);
}

function midN(arr, position1 = 0, position2){
  if(!Array.isArray(arr)){
    throw new Error('array-n-first expects first arguement as an array.');
  }

  checkInputValidity(arr, position1, position2);
  return getElements(arr, isNumber(position1) ? position1 : 0, isNumber(position2) ? position2 : 0);
}

function checkInputValidity(arr, position1, position2){
  if(!isNumber(position1) || !isNumber(position2)){
    throw new Error('positions must be an integer');
  }

  if(position1+1 > arr.length || position2+1 > arr.length){
     throw new Error('positions must be less than size of array');
  }

  if(position1 < 1 || position2 < 1){
      throw new Error('positions must be greater than 1');
  }

  if(arr.length === 0){
    return null;
  }
}

function getElements(arr, position1, position2){
  var tempArray = [];
  for(var i = position1-1; i < position2;i++){
    tempArray.push(arr[i]);
  }

  return tempArray.length == 1 ? tempArray[0] : tempArray;
}
