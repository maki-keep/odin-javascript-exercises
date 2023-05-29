const removeFromArray = function(array, ...args) {
  let output = array;
  for (const arg of args) {
    output = output.filter(el => el !== arg);
  }
  return output;
};

// Do not edit below this line
module.exports = removeFromArray;
