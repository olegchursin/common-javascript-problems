// INSTRUCTIONS
// Given a number as an argument, return a reversed number.
//
// Examples:
// reverseInt(47); -> 74
// reverseInt(-43); -> -34
// reverseInt(400); -> 4

// Solution 1 (using Math.sign())
const reverseInt = (n) => {
  const revInt = parseInt(n.toString().split('').reverse().join(''));

  return revInt * Math.sign(n);
}

// Solution 2
const reverseInt = (n) => {
  const revInt = parseInt(n.toString().split('').reverse().join(''));

  if(n < 0) {
    return revInt * -1;
  } else {
    return revInt;
  }

}
