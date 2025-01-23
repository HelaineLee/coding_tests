// nums의 길이는 200,000을 넘지 않습니다.
// 매개변수 m에 M(70<=M<=10,000)이 주어집니다.
// 승객의 몸무게는 50이상 1,000이하 이며, 각 승객의 몸무게는 M을 넘지는 않습니다.

const getMinimumBoat = (arr, weight) => {
  const length = arr.length;
  arr.sort((a, b) => b-a);
  let boat = 0;
  let idx = 0;

  while(idx < length){
    if(arr[idx]){
      let total = arr[idx];
      delete arr[idx];
      arr.map(a => {
        if(total+a <= weight){
          total += a;
          delete arr[arr.indexOf(a)];
        }
      });
      boat++;
    }
    idx++;
  }

  return boat;
}

console.log(getMinimumBoat([90, 50, 70, 100, 60], 140)); // 3
console.log(getMinimumBoat([86, 95, 107, 67, 38, 49, 116, 22, 78, 53], 150)); // 5
console.log(getMinimumBoat([68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75, 83, 21, 81], 120)); // 14