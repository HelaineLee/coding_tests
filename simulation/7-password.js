// 시작위치가 2라면 1, 3, 4, 5, 6 으로 이동은 1초가 걸리고, 
// 시작위치 2에서 7, 8, 9로는 2초가 걸립니다.
// password의 길이는 200,000을 넘지 않습니다.

const getTime = (arr, password) => {
  const obj = {};

  // 0 1 2 / 3 4 5 / 6 7 8
  for(let i=0 ; i<arr.length ; i++){
    obj[arr[i]] = {
      x : Math.floor(i/3),
      y : i%3
    }
  }

  let sum = 0;
  for(let i=1 ; i<password.length ; i++){
    const prev = obj[password[i-1]];
    const now = obj[password[i]];

    const distance = (prev.x-now.x)*(prev.x-now.x)+(prev.y-now.y)*(prev.y-now.y);
    switch(distance){
      case 0:
        // sum += 0;
        break;
      case 1:
      case 2:
        sum += 1;
        break;
      default:
        sum += 2;
        break;
    }
  }
  return sum;
}

console.log(getTime([2, 5, 3, 7, 1, 6, 4, 9, 8], "7596218")); // 8
console.log(getTime([1, 5, 7, 3, 2, 8, 9, 4, 6], "63855526592")); // 12
console.log(getTime([2, 9, 3, 7, 8, 6, 4, 5, 1], "323254677")); // 13
console.log(getTime([1, 6, 7, 3, 8, 9, 4, 5, 2], "3337772122")); // 8