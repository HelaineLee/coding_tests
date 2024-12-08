// 지도의 크기는 항상 10*10
// 0 - 빈칸, 1 - 나무, 2 - 현수, 3 - 강아지

// 강아지와 현수는 항상 고정된 방법으로 지도를 다닌다. 먼저 북쪽(지도에서 위쪽)으로 출발하되, 
// 계속 한쪽방향으로 가다가 나무나 지도의 끝에 이르면 90도 시계방향으로 회전하게 된다.

// 한 칸을 이동하거나, 방향을 회전할 때에는 1분이 소요된다.

// 만약 이동, 또는 회전을 한 후 현수와 강아지가 같은 칸에 있게 되면 현수가 강아지를 찾게 된다. 
// 현수와 강아지가 있는 숲의 지도정보가 board에 주어지면 몇 분 후에 현수가 강아지를 찾을 수 있는지 구하는 프로그램을 작성하세요. 
// 10,000분 후에도 찾을 수 없으면 0을 반환합니다.

const test0 = [
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 2, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 3]
];

const test1 = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 2, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0]
];  // 51

const test2 = [
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 2, 1],
  [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 3]
];  // 17

const findDog = (array) => {
  const hyunsoo = {};
  const dog = {};
  const length = array.length;

  for(let i=0 ; i<length ; i++){
    if(array[i].indexOf(2) !== -1){
      hyunsoo.x = i;
      hyunsoo.y = array[i].indexOf(2);
    }
    if(array[i].indexOf(3) !== -1){
      dog.x = i;
      dog.y = array[i].indexOf(3);
    }
  }

  let minutes = 0;
  let hyunsooDirection = 0;
  let dogDirection = 0;

  while(minutes <= 10000){  // 10000
    // console.log(hyunsoo, dog);
    if(hyunsoo.x === dog.x && hyunsoo.y === dog.y){
      return minutes;
    }

    // [0, 1, 0, 1, 0]  00 01 02 03 04
    // [0, 0, 0, 0, 0]  10 11 12 13 14
    // [0, 0, 0, 2, 1]  20 21 22 23 24
    // [1, 0, 0, 0, 1]  30 31 32 33 34
    // [0, 0, 0, 0, 3]  40 41 42 43 44

    switch(hyunsooDirection%4){
      case 0: // 북
        if(hyunsoo.x === 0 || array[hyunsoo.x-1][hyunsoo.y] === 1){
          hyunsooDirection++;
        }else{
          hyunsoo.x--;
        }
        break;
      case 1: // 동
        if(hyunsoo.y === length-1 || array[hyunsoo.x][hyunsoo.y+1] === 1){
          hyunsooDirection++;
        }else{
          hyunsoo.y++;
        }
        break;
      case 2: // 남
        if(hyunsoo.x === length-1 || array[hyunsoo.x+1][hyunsoo.y] === 1){
          hyunsooDirection++;
        }else{
          hyunsoo.x++;
        }
        break;
      case 3: // 서
        if(hyunsoo.y === 0 || array[hyunsoo.x][hyunsoo.y-1] === 1){
          hyunsooDirection++;
        }else{
          hyunsoo.y--;
        }
        break;
    }
    
    switch(dogDirection%4){
      case 0: // 북
        if(dog.x === 0 || array[dog.x-1][dog.y] === 1){
          dogDirection++;
        }else{
          dog.x--;
        }
        break;
      case 1: // 동
        if(dog.y === length-1 || array[dog.x][dog.y+1] === 1){
          dogDirection++;
        }else{
          dog.y++;
        }
        break;
      case 2: // 남
        if(dog.x === length-1 || array[dog.x+1][dog.y] === 1){
          dogDirection++;
        }else{
          dog.x++;
        }
        break;
      case 3: // 서
        if(dog.y === 0 || array[dog.x][dog.y-1] === 1){
          dogDirection++;
        }else{
          dog.y--;
        }
        break;
    }

    minutes++;
  }

  return 0;
}

// console.log(findDog(test0));
console.log(findDog(test1));
console.log(findDog(test2));