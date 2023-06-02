const snakeCase = function(string) {
  let converted = string;

  // two periods between words
  const wtfCasePattern = /\w\.\.\w/g;

  // uppercase letter following word
  const camelCasePattern = /\w(?=[A-Z])/g;

  // dash between words
  const kebabCasePattern = /\w\-\w/g;

  if (wtfCasePattern.test(converted)) {
    converted = converted.split('..').join('_');
  } else if (camelCasePattern.test(converted)) {
    converted = converted.replace(camelCasePattern, char => `${char}_`);
  } else if (kebabCasePattern.test(converted)) {
    converted = converted.split('-').join('_');
  }
  return converted
    .replace(/[^\w\s\_]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/^ +/g, '')
    .replace(/ +$/g, '')
    .split(' ')
    .join('_')
    .toLowerCase();
};

// Do not edit below this line
module.exports = snakeCase;
