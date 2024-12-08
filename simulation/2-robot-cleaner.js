// board의 크기 (3 <= n <= 100)
// board에서 0은 빈 공간이고, 1은 장애물이다.
// board에서 로봇의 시작위치는 0행 0열(가장 왼쪽 가장 위)이다.
// 변수 k는 1,000이하의 자연수이다.

const getPosition = (arr, time) => {
  const robot = {x:0, y:0};
  let direction = 0;  // 0동 1남 2서 3북

  // 00 01 02 03
  // 10 11 12 13
  // 20 21 22 23
  // 30 31 32 33

  // 0 0 0 1 0 1
  // 0 0 0 0 0 0
  // 0 0 0 0 0 1
  // 1 1 0 0 1 0
  // 0 0 0 0 0 0
  // 0 0 0 0 0 0
  for(let i=0 ; i<time ; i++){
    switch(direction%4){
      case 0: // 동
        if(robot.y === arr.length-1 || arr[robot.x][robot.y+1] === 1){
          direction++;
        }else{
          robot.y++;
        }
        break;
      case 1: // 남
        if(robot.x === arr.length-1 || arr[robot.x+1][robot.y] === 1){
          direction++;
        }else{
          robot.x++;
        }
        break;
      case 2: // 서
        if(robot.y === 0 || arr[robot.x][robot.y-1] === 1){
          direction++;
        }else{
          robot.y--;
        }
        break;
      case 3: // 북
        if(robot.x === 0 || arr[robot.x-1][robot.y] === 1){
          direction++;
        }else{
          robot.x--;
        }
        break;
    }
  }

  return [robot.x, robot.y];
}

console.log(getPosition([[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1], [0, 0, 0, 0, 0]], 10)); // [2, 2]
console.log(getPosition([[0, 0, 0, 1, 0, 1], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0]], 20)); // [4, 5]
console.log(getPosition([[0, 0, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0]], 25)); // [0, 1]