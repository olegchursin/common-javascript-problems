// INSTRUCTIONS
// Given a string as an argument, return a reversed string.
//
// Example:
// reversestring('abc'); -> 'cba'

// Solution 1
const reversestring1 = (string) => {
  return string
  .split('')
  .reverse()
  .join('');
}

// Solution 2
const reversestring2 = (string) => {
  let reversed = '';

  for (let char of string) {
    reversed = char + reversed;
  }

  return reversed;
}
