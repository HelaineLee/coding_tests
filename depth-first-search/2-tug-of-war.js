const generateArray = (arr, enemy, prev) => { // [1,2,3,4]
  // console.log(arr, prev);

  if (arr.length === 0) return [];
  if (arr.length === 1){
    let skip = false;
    enemy.map(e => {
      if(e.includes(parseInt(arr[0])) && e.includes(parseInt(prev))) {
        skip = true;
      }
    });
    return skip ? [] : [arr.join('')];
  }

  const result = [];

  for (let i=0 ; i<arr.length ; i++) {
    let skip = false;
    enemy.map(e => {
      if(e.includes(parseInt(arr[i])) && e.includes(parseInt(prev))) {
        skip = true;
      }
    });
  
    if(!skip){
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]; // Remove the current element
      const perms = generateArray(rest, enemy, arr[i]); // Recursively get permutations of the rest
      // console.log(rest, perms);

      for (let perm of perms) {
        result.push(arr[i] + perm); // Concatenate current element with each permutation
      }
    }
  }

  return result;
}

const getMinimumCases = (enemy, n) => {
  let idx = 1;
  const element = Array.from({length: n}, () => `${idx++}`);

  const answer = generateArray(element, enemy, '0');
  // console.log(answer);

  return answer.length;
}

console.log(getMinimumCases([[1, 3]], 4)); // => 12
console.log(getMinimumCases([[1, 3], [2, 4]], 4)); // => 8
console.log(getMinimumCases([[1, 3], [1, 4]], 4)); // => 4
// console.log(getMinimumCases([[1, 7]], 7)); // => 3600
// console.log(getMinimumCases([[1, 3], [5, 7], [4, 2]], 7)); // => 1968
// console.log(getMinimumCases([[3, 2], [3, 5], [5, 2], [7, 3]], 7)); // => 864
// console.log(getMinimumCases([[1, 2], [1, 5], [1, 7], [1, 3]], 7)); // => 720
// console.log(getMinimumCases([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], 7)); // => 646