function sumAll(a, b) {
  let sum = 0;
  if (a == b) {
    console.log("error");
  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
let c = sumAll(1, 5);
console.log(c);

// Do not edit below this line
module.exports = sumAll;
