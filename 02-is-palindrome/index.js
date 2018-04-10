// INSTRUCTIONS
// Given a string as an argument, check if the string is a palindrome.
//
// Example:
// isPalindrome('ava'); -> true
// isPalindrome('weird'); -> false

// Solution 1
const isPalindrome1 = (string) => {
  const reversed = string.split('').reverse().join('');

  return reversed === string
}

// Solution 2
const isPalindrome2 = (string) => {
  return string.split('').every((char, i) => {
    return char === string[string.length - i - 1];
  });
}
