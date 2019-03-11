module.exports = function getZerosCount(number, base) {
  let result = Number.MAX_VALUE;
  let j = base;
  for (let i = 2; i <= base; i += 1) {
    if (j % i === 0) {
      let p = 0;
      while (j % i === 0) {
        j = j / i;
        p++;
      }
      let c = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      result = Math.min(result, Math.floor(c / p))
    }
  }
  return result;
}