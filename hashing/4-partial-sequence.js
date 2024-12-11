// nums의 길이는 200,000을 넘지 않는다.
// M(-100,000,000≤M≤100,000,000)
// 수열의 원소값은 -1000부터 1,000까지의 정수입니다.

const getNumbers = (arr, num) => {
  let cnt = 0;
  for(let i=0 ; i<arr.length ; i++){
    let sum = arr[i];
    if(sum === num){
      cnt++;
    }
    for(let j=i+1 ; j<arr.length ; j++){
      sum += arr[j];
      if(sum === num){
        cnt++;
      }
    }
  }
  return cnt;
}

console.log(getNumbers([2, 2, 3, -1, -1, -1, 3, 1, 1], 5)); // 5
console.log(getNumbers([1, 2, 3, -3, 1, 2, 2, -3], 5)); // 5
console.log(getNumbers([1, 2, 3, -3, 1, 2], 3)); // 6
console.log(getNumbers([-1, 0, 1], 0)); // 2
console.log(getNumbers([-1, -1, -1, 1], 0)); // 1