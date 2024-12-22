// nums의 길이는 짝수이고, 10,000을 넘지 않습니다.
// 1 <= nums[i] <= 100,000

const getOriginalSequence = (arr) => {
  const original = [];

  while(arr.length > 0){
    const element = arr[0];
    arr.shift();

    if(arr.includes(element*2)){
      original.push(element);
      const idx = arr.indexOf(element*2);
      arr.splice(idx, 1);
    }else{
      original.push(element/2);
      const idx = arr.indexOf(element/2);
      arr.splice(idx, 1);
    }
  }

  return original.sort((a,b) => a-b);
}

console.log(getOriginalSequence([1, 10, 2, 3, 5, 6])); // [1, 3, 5]
console.log(getOriginalSequence([1, 1, 6, 2, 2, 7, 3, 14])); // [1, 1, 3, 7]
console.log(getOriginalSequence([14, 4, 2, 6, 3, 10, 10, 5, 5, 7, 7, 14])); // [2, 3, 5, 5, 7, 7]