function repeatString(string, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}
repeatString("hello", 3);
// Do not edit below this line
module.exports = repeatString;
