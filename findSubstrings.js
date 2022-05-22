function findSubstring(s) {
  let i = 0;
  let j = 1;
  let result = 0;

  while (j < s.length) {
    const p = s.substring(i, j).indexOf(s.charAt(j));
    result += (j - i);

    if (p > -1) {
      i = p + 1;
    }

    j += 1;
  }

  return result + j - i;
}


const s = 'abac';
// const s = 'bcada';

console.log(findSubstring(s));