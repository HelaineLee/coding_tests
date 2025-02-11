// 자연수의 N(1<=N<=9999999)

const generateArray = (arr) => {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr.join('')];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]; // Remove the current element
    const perms = generateArray(rest); // Recursively get permutations of the rest

    for (let perm of perms) {
      result.push(arr[i] + perm); // Concatenate current element with each permutation
    }
  }

  return result;
}

const getNumber = (num) => {
  const str = num.toString().split('');
  str.sort((a, b) => a-b);

  const arr = generateArray(str);
  // console.log(arr);

  for(let i=0 ; i<arr.length ; i++){
    if(parseInt(arr[i]) > num){
      return parseInt(arr[i]);
    }
  }

  return -1;
}

console.log(getNumber(123)); // 132
console.log(getNumber(321)); // -1
console.log(getNumber(20573)); // 20735
console.log(getNumber(27711)); // 71127
console.log(getNumber(54312)); // 54321