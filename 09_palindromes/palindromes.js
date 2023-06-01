const palindromes = function (str) {
  // filter out punctuation and word break, 
  // anything but letters or digit
  const cleanStr = str.toLowerCase().replace(/[^\w]|_/g, '');

  let letters = cleanStr.split('');
  let letters2 = [];
  for (const ele of letters) {
    letters2.unshift(ele);
  }

  // convert letters back into string, 
  // without punctuation or word break
  return letters.join('') === letters2.join('');
};

// Do not edit below this line
module.exports = palindromes;
