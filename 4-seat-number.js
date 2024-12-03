// 사람들은 온 순서대로 (1,1)위치 좌석부터 시작하여 시계방향으로 돌아 들어가면서 빈 좌석에 앉습니다.
// 5 ≤ c, r ≤ 1,000
// 1 ≤ k ≤ 100,000,000

const seatResult = (c, r, k) => {
  if(k > c*r){
    return [0,0];
  }else{
    let x = 1;
    let y = 1;
    let direction = 0;
    let depth = 1;

    for(let i=1 ; i<k ; i++){
      switch(direction%4){
        case 0: // 북
          y++;
          if(y+depth === r+1){
            direction++;
          }
          break;
        case 1: // 동
          x++;
          if(x+depth === c+1){
            direction++;
          }
          break;
        case 2: // 남
          y--;
          if(y===depth){
            direction++;
            depth++;
          }
          break;
        case 3: // 서
          x--;
          if(x===depth){
            direction++;
          }
          break;
      }
    }

    return [x,y];
  }
}

console.log(seatResult(6, 5, 12), [6,3]);
console.log(seatResult(6, 5, 20), [2,3]);
console.log(seatResult(6, 5, 30), [4,3]);
console.log(seatResult(6, 5, 31), [0,0]);

// 15 25 35 45 55
// 14 24 34 44 54
// 13 23 33 43 53
// 12 22 32 42 52
// 11 21 31 41 51

// console.log(seatResult(5,5,1), [1,1]);
// console.log(seatResult(5,5,2), [1,2]);
// console.log(seatResult(5,5,3), [1,3]);
// console.log(seatResult(5,5,4), [1,4]);
// console.log(seatResult(5,5,5), [1,5]);
// console.log(seatResult(5,5,6), [2,5]);
// console.log(seatResult(5,5,7), [3,5]);
// console.log(seatResult(5,5,8), [4,5]);
// console.log(seatResult(5,5,9), [5,5]);
// console.log(seatResult(5,5,10), [5,4]);
// console.log(seatResult(5,5,11), [5,3]);
// console.log(seatResult(5,5,12), [5,2]);
// console.log(seatResult(5,5,13), [5,1]);
// console.log(seatResult(5,5,14), [4,1]);
// console.log(seatResult(5,5,15), [3,1]);
// console.log(seatResult(5,5,16), [2,1]);
// console.log(seatResult(5,5,17), [2,2]);
// console.log(seatResult(5,5,18), [2,3]);
// console.log(seatResult(5,5,19), [2,4]);
// console.log(seatResult(5,5,20), [3,4]);
// console.log(seatResult(5,5,21), [4,4]);
// console.log(seatResult(5,5,22), [4,3]);
// console.log(seatResult(5,5,23), [4,2]);
// console.log(seatResult(5,5,24), [3,2]);
// console.log(seatResult(5,5,25), [3,3]);