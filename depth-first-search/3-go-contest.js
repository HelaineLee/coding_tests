// cans의 길이는 4이상이고 14을 넘지 않습니다. cans의 길이는 항상 짝수입니다.
// cans에는 각 선수의 흰 돌로 했을 때 능력치와, 검은 돌로 했을 때 능력치가 각각 순서쌍으로 주어집니다. 각 선수의 능력치는 100,000을 넘지 않는다.

const generateArray = (arr, n) => { // [0,1,2,3], 2 => [1,2,3], 1 => [2,3], 0
  if (n === 0) return [];
  if (n === 1) return arr;

  const result = [];

  for (let i=0; i<arr.length-1; i++) {
    const rest = arr.slice(i+1); // [1,2,3] => [2,3]
    const perms = generateArray(rest, n-1); // Recursively get permutations of the rest

    for (let p of perms) {
      result.push(arr[i] + p); // Concatenate current element with each permutation
    }
  }

  return result;
}

const getMinimumDiff = (arr) => {
  const indexArr = [];
  let diff = 0;
  for(let i=0 ; i<arr.length ; i++){
    indexArr.push(`${i}`);
    diff += arr[i][0]+arr[i][1];
  }

  let combination = generateArray(indexArr, arr.length/2);
  // console.log(combination); // 01, 02, 03, 12, 13, 23

  for(let i=0 ; i<combination.length ; i++){
    let whiteSum = 0;
    let blackSum = 0;
    const pick = combination[i].split('');

    for(let j=0 ; j<arr.length ; j++){
      if(pick.includes(j.toString())){
        whiteSum += arr[j][0];
      }else{
        blackSum += arr[j][1];
      }
    }
    
    // console.log(pick, whiteSum, blackSum);
    const sum = Math.max(whiteSum-blackSum, blackSum-whiteSum);
    diff = Math.min(diff, sum);
  }

  return diff;
}

console.log(getMinimumDiff([[87, 84], [66, 78], [94, 94], [93, 87], [72, 92], [78, 63]])); // 2
console.log(getMinimumDiff([[10, 20], [15, 25], [35, 23], [55, 20]])); // 0 // 10 25 35 20
console.log(getMinimumDiff([[11, 27], [16, 21], [35, 21], [52, 21], [25, 33], [25, 32], [37, 59], [33, 47]])); // 1