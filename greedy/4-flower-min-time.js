// plantTime과 growTime의 길이는 같으며, 길이는 300,000을 넘지 않습니다.
// plantTime[i]는 i번째 씨의 심는 기간입니다.
// growTime[i]는 i번째 씨의 성장 기간입니다.
// 1 <= plantTime[i], growTime[i] <= 10,000
// 현수는 하루에 하나의 꽃씨만 심을 수 있습니다.

const getMinimumTime = (plant, grow) => {
  const obj = [];
  for(let i=0 ; i<plant.length ; i++){
    obj.push([i, plant[i], grow[i]]);
  }

  obj.sort((a, b) => b[2]-a[2]);
  // obj.map(o => console.log(o));

  let totalTime = obj[0][1];
  let tempTime = obj[0][2];
  // console.log(totalTime, tempTime, 0);

  for(let i=1 ; i<obj.length ; i++){
    totalTime += obj[i][1];

    if(tempTime < obj[i][1]+obj[i][2]){
      tempTime = obj[i][2];
    }else{
      tempTime -= obj[i][1];
    }
    // console.log(totalTime, tempTime, i);
  }

  return totalTime+tempTime;
}

console.log(getMinimumTime([1, 3, 2], [2, 3, 2])); // 8
// 3 + 3 => 3, 3
//     1 + 2 => 3 < 1+2 => 4, 2
//         2 + 2 => 2 < 2+2 => 6, 2

console.log(getMinimumTime([2, 1, 4, 3], [2, 5, 3, 1])); // 11
// 1 + 5 => 1, 5
//     4 + 3 => 5 < 4+3 => 5, 3
//         2 + 2 => 3 < 2+2 => 7, 2
//             3 + 1 => 2 < 3+1 => 10, 1

console.log(getMinimumTime([1, 1, 1], [7, 3, 2])); // 8
// 1 + 7 => 1, 7
//     1 + 3 => 7 > 1+3 => 2, 6
//         1 + 2 => 6 > 1+2 => 3, 5

console.log(getMinimumTime([5, 7, 10, 15, 7, 3, 5], [6, 7, 2, 10, 15, 6, 7])); // 54
console.log(getMinimumTime([1, 2, 3, 4, 5, 6, 7], [7, 5, 4, 3, 2, 1, 6])); // 29