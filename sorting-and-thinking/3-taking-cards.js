// nums의 길이는 짝수이고, 300,000을 넘지 않습니다.
// 0<=k<=n/2
// 1<= nums[i] <= 100,000

const getMaxSum = (nums, chance) => {
  nums.sort((a,b) => b-a);
  const obj = [];

  for(let i=0 ; i<nums.length/2 ; i++){
    obj.push([nums[i*2], nums[i*2+1], nums[i*2]-nums[i*2+1]]);
  }

  let hyunsoo = 0;
  let younghee = 0;
  obj.sort((a,b) => b[2]-a[2]);

  obj.map(o => {
    if(chance > 0){
      hyunsoo += o[0];
      younghee += o[1];
      chance--;
    }else{
      younghee += o[0];
      hyunsoo += o[1];
    }
  })

  return Math.max(hyunsoo, younghee);
}

console.log(getMaxSum([7, 8, 5, 12, 3, 1, 3, 1, 1, 12], 2)); // 28
console.log(getMaxSum([8, 2, 12, 12, 12, 12, 2, 2], 2)); // 34
console.log(getMaxSum([3, 7, 12, 3, 3, 5, 7, 8, 9, 11, 23, 4, 6, 7], 3)); // 60
console.log(getMaxSum([12, 34, 56, 23, 22, 34, 55, 45, 24, 23, 45, 55, 55, 23, 11, 12, 23, 12], 3)); // 283
console.log(getMaxSum([14, 15, 20, 11, 10, 20, 20, 12, 9, 22, 27, 25, 30, 19], 3)); // 129