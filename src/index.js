module.exports = function getZerosCount(number, base) {
  const simple = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  let mnoj = 0;
  let time = base;
  let maxSimple = 0;

  for (let i = 0; simple[i] <= base; i += 1) {
    if (base % simple[i] == 0) {
      maxSimple = simple[i]
    }
  }

  while (time % maxSimple === 0) {
    mnoj++;
    time = time / maxSimple;
  }

  let count = 0;
  while (number > 0) {
    number = Math.floor(number / maxSimple);
    count += number;
  }
  return Math.floor(count / mnoj);
}