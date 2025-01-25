// 3 <= n <= 200,000
// nums의 원소값은 100을 넘지 않는 양의 정수입니다.

const getMinimumSprinkler = (arr) => {
  const grass = Array.from({length: arr.length}, () => false);
  let cnt = 0;
  let lastIdx = -1;
  let lastValue = -1;

  for(let i=0 ; i<arr.length ; i++){
    if(arr[i] > 0){
      if(!grass[i]){
        if(arr[i] >= arr[i+1] || arr[i+1] === undefined){
          const start = Math.max(i-arr[i], 0);
          const end = Math.min(i+arr[i], arr.length-1);
          for(let j=start ; j<=end ; j++){
            grass[j] = true;
          }
          cnt++;
        }
      }else{
        lastIdx = i;
        lastValue = arr[i];
      }
    }else{
      if(i-lastValue === lastIdx){
        grass[i] = true;
      }
    }
  }

  // console.log(grass);
  return grass.includes(false) ? -1 : cnt;
}

console.log(getMinimumSprinkler([1, 1, 1, 2, 1, 1, 2, 1, 1])); // 3
console.log(getMinimumSprinkler([1, 2, 2, 0, 0])); // 1
console.log(getMinimumSprinkler([2, 0, 0, 0, 0, 2] )); //-1
console.log(getMinimumSprinkler([1, 2, 3, 1, 2, 1, 1, 2, 1, 1, 1, 1])); // 3
console.log(getMinimumSprinkler([0, 0, 0, 2, 0, 2])); // -1