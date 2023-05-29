const reverseString = function(string) {
  const chars = string.split('');
  const reversedChars = chars.reverse();
  const reversedString = reversedChars.join('');
  return reversedString;

  /* let reversedChars = [];
  for (let i = chars.length - 1; i >= 0; i--) {
    reversedChars.push(chars[i]);
  }
  return reversedChars.join(''); */
};

// Do not edit below this line
module.exports = reverseString;
