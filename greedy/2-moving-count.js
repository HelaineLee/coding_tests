// nums의 길이는 300,000을 넘지 않습니다.
// 모든 물건의 무게는 2kg이상 5kg이하입니다. => 5kg, 4kg일 때는 한번에 하나씩만

const getMinimumCnt = (arr) => {
  const weight_5_4 = arr.filter(a => a > 3);
  const weight_3 = arr.filter(a => a === 3);
  const weight_2 = arr.filter(a => a === 2);

  return weight_5_4.length + Math.max(weight_3.length, weight_2.length);
}

console.log(getMinimumCnt([2, 5, 3, 4, 2, 3])); // 4
console.log(getMinimumCnt([2, 3, 4, 5])); // 3
console.log(getMinimumCnt([3, 3, 3, 3, 3])); // 5
console.log(getMinimumCnt([3, 3, 2, 2, 2])); // 3