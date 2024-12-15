// nums의 길이는 300,000을 넘지 않습니다.
// nums[i]의 값은 -1,000,000,000에서 1,000,000,000까지이며, 중복된 값도 있습니다.

const getMaxlength = (arr) => {
  arr.sort((a,b) => a-b);
  const set = new Set(arr);
  const unique = [...set];

  let maxLength = 1;
  let currentLength = 1;

  for(let i=1 ; i<unique.length ; i++){
    if(unique[i]-unique[i-1] === 1){
      currentLength++;
      if(currentLength > maxLength){
        maxLength = currentLength;
      }
    }else{
      currentLength = 0;
    }
  }

  return maxLength;
}

console.log(getMaxlength([8, 1, 9, 3, 10, 2, 4, 0, 2, 3])); // 5
console.log(getMaxlength([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0])); // 10
console.log(getMaxlength([3, 3, 3, 3, 3, 3, 3, 3])); // 1
console.log(getMaxlength([-3, -1, -2, 0, 3, 3, 5, 6, 2, 2, 1, 1])); // 7
console.log(getMaxlength([-5, -3, -1, -4, 3, 3, 5, 6, 2, 2, 1, 1, 7])); // 3