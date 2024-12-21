// 매개변수 nums에 숫자가 주어지면 nums의 원소들을 이진수로 변환했을 때
// 1의 개수가 적은 것부터 많은 것 순으로 정렬하여 반환하는 프로그램을 작성하세요.
// 이진수로 변환했을 때 1의 개수가 2개로 동일하면 십진수가 작은순(오름차순)으로 정렬합니다.

// nums의 길이는 1,000을 넘지 않습니다.
// 1 <= nums[i] <= 100,000

const getNumberOfOne = (num) => {
  let cnt = 0;
  while(num > 0){
    if(num % 2 === 1){
      cnt++;
    }
    num = Math.floor(num/2);
  }
  return cnt;
}

const getSortedArray = (arr) => {
  const binary = {};

  for(let i=0 ; i<arr.length ; i++){
    const cnt = getNumberOfOne(arr[i]);
    if(binary[cnt]){
      binary[cnt].push(arr[i]);
    }else{
      binary[cnt] = [arr[i]];
    }
  }

  const sorted = [];

  Object.keys(binary).map(key => {
    binary[key].sort((a,b) => a-b);
    binary[key].map(b => {
      sorted.push(b);
    })
  });

  return sorted;
}

console.log(getSortedArray([5, 6, 7, 8, 9])); // [8, 5, 6, 9, 7]
console.log(getSortedArray([5, 4, 3, 2, 1])); // [1, 2, 4, 3, 5]
console.log(getSortedArray([12, 5, 7, 23, 45, 21, 17])); // [5, 12, 17, 7, 21, 23, 45]