// nums의 길이 3 <= n <= 10,000
// 배열 nums의 원소는 자연수입니다.

const sequenceLength = (nums) => {
  let direction = 0;  // 1일 때 증가하는 방향, -1일 때 감소하는 방향
  let startIdx = 0;
  let maxlength = 0;

  for(let i=1 ; i<nums.length ; i++){
    const diff = nums[i] - nums[i-1];

    if(diff === 0){
      if(direction < 0){
        const length = i-1 - startIdx + 1;
        if(maxlength < length){
          maxlength = length;
        }
      }
      startIdx = 0;
    }else if(diff > 0){
      if(direction <= 0){
        startIdx = i-1;
      }
    }else if(diff < 0){
      if(direction !== 0){
        const length = i - startIdx + 1;
        if(maxlength < length){
          maxlength = length;
        }
      }
    }
    
    direction = diff;
  }

  return maxlength;
}

console.log(sequenceLength([1, 3, 2, 5, 7, 4, 2, 5, 1])); // 5
console.log(sequenceLength([1, 1, 2, 3, 5, 7, 4, 3, 1, 2])); // 8
console.log(sequenceLength([3, 2, 1, 3, 2, 4, 6, 7, 3, 1])); // 6
console.log(sequenceLength([1, 3, 1, 2, 1, 5, 3, 2, 1, 1])); // 5