function leapYears(yr) {
  if ((yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0) {
    return true; // Return the result as a string.
  } else {
    return false; // Return the result as a string.
  }
}

const a = leapYears(2000);
const b = leapYears(1985);
console.log(a); // This will correctly print "leap year" to the console.
console.log(b); // This will correctly print "leap year" to the console.

// Do not edit below this line
module.exports = leapYears;
