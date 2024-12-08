// 3 ≤ n ≤ 25입니다.
// 매개변수 ladder의 길이(사다리 가로줄의 개수)는 1,000을 넘지 않습니다.
// 매개변수 ladder[i]의 길이는 10을 넘지 않습니다.

const obj = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y'
}

const ladderResult = (n, ladder) => {
  let position = '';
  for(let i=1 ; i<=n ; i++){
    position += obj[i];
  }

  // A B C D E
  // |-| |-| |
  // B A D C E
  // | |-| |-|
  // B D A E C
  // |-| | |-|
  // D B A C E

  for(let i=0 ; i<ladder.length ; i++){
    let temp = '';
    const arr = position.split('');
    
    for(let j=0 ; j<n ; j++){
      if(ladder[i].includes(j+1)){
        temp += arr[j+1]+arr[j];
        j++;
      }else{
        temp += arr[j];
      }
    }

    position = temp;
  }

  return position.split('');
}

console.log(ladderResult(5, [[1, 3], [2, 4], [1, 4]]));  // ['D', 'B', 'A', 'C', 'E']
console.log(ladderResult(7, [[1, 3, 5], [1, 3, 6], [2, 4]]));  // ['A', 'C', 'B', 'F', 'D', 'G', 'E']
console.log(ladderResult(8, [[1, 5], [2, 4, 7], [1, 5, 7], [2, 5, 7]]));  // ['C', 'A', 'B', 'F', 'D', 'E', 'H', 'G']
console.log(ladderResult(12, [[1, 5, 8, 10], [2, 4, 7], [1, 5, 7, 9, 11], [2, 5, 7, 10], [3, 6, 8, 11]]));
// ['C', 'A', 'F', 'B', 'D', 'I', 'E', 'K', 'G', 'L', 'J', 'H']