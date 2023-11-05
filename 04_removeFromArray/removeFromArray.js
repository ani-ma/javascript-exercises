function removeFromArray(arr, num) {
  const index = arr.indexOf(num);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

const result = removeFromArray([1, 2, 3, 4], 3);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
