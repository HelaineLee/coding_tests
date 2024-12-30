// board의 길이는 500을 넘지 않습니다.
// 2 <= k < board길이 * board길이

const getDistance = (x, y, position) => {
  let sum = 0;
  position.map(p => {
    sum += Math.abs(x-p[0])+Math.abs(y-p[1]);
  })
  return sum;
}

const getMinimumSum = (board) => {
  const position = [];
  const n = board.length;
  for(let i=0 ; i<n ; i++){
    for(let j=0 ; j<n ; j++){
      if(board[i][j] === 1){
        position.push([i, j]);
      }
    }
  }

  let sum = getDistance(0, 0, position);
  for(let i=0 ; i<n ; i++){
    for(let j=0 ; j<n ; j++){
      if(i !== 0 || j !== 0){
        sum = Math.min(getDistance(i, j, position), sum);
      }
    }
  }
  return sum;
}

// 1 0 0 0 0  // 1 0 0 * 1
// 0 0 0 0 0  // 0 0 0 0 0
// 0 0 * 0 1  // 0 0 0 0 0
// 0 0 0 0 0  // 0 0 0 0 0
// 0 0 1 0 0  // 0 0 0 1 0

console.log(getMinimumSum([[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])); // 8
console.log(getMinimumSum([[1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0]])); // 8
console.log(getMinimumSum([[1, 0, 0, 0, 1, 1], [0, 1, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 1, 1]])); // 37