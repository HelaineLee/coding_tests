// meetings의 길이는 200,000입니다. 각 회의에 시작시간은 고유합니다.
// 1 <= n <= 200
// 회의시간은 0 <= 회의시간 <= 500,000입니다.

// 1) 사용 가능한 회의실이 생기면 시작 시간이 더 빠른 회의를 회의실에 배정합니다.
// 2) 사용 가능한 회의실이 여러개일 경우 가장 번호가 낮은 회의실에 회의를 배정합니다.
// 3) 사용 가능한 회의실이 없는 경우 다음 순서의 회의는 회의실이 비워질 때까지 기다렸다 자신의 회의 시간만큼 회의를 합니다.

// 만약 회의가 7시에 끝나고 회의실이 7시에 비워진다면 기다린 회의가 바로 7시에 시작될 수 있다고 가정합니다.
// 매개변수 n에 회의실의 개수가 주어지고, 매개변수 meetings에 각 회의의 시작시간과 끝나는 시간이 주어지면
// 가장 많은 회의를 개최한 회의실의 번호를 반환합니다.
// 답이 여러개일 경우 번호가 가장 작은 회의실의 번호를 반환합니다.

const getRoomNumber = (n, arr) => {
  const room = [];
  for(let i=0 ; i<n ; i++){
    room.push([0, 0]); // count, endTime
  }

  arr.sort((a, b) => a[0]-b[0]);

  for(let i=0 ; i<arr.length ; i++){
    arr[i][2] = arr[i][1] - arr[i][0];  // time difference
  }

  while(arr.length > 0){
    let pass = false;
    let minEndTime = room[0][1];

    for(let i=0 ; i<n ; i++){
      if(room[i][1] <= arr[0][0]){
        room[i][0]++;
        room[i][1] = arr[0][1];
        // console.log(arr[0], i, room[i]);
        arr.shift();
        pass = true;
        break;
      }else{
        minEndTime = Math.min(minEndTime, room[i][1]);
      }
    }

    if(!pass){
      arr[0][0] = minEndTime;
      arr[0][1] = minEndTime+arr[0][2];
    }
  }


  let roomNumber = 0;
  let maxUsed = room[0][0];

  for(let i=1 ; i<n ; i++){
    if(maxUsed < room[i][0]){
      maxUsed = room[i][0];
      roomNumber = i;
    }
  }

  return roomNumber;
}

console.log(getRoomNumber(2, [[0, 5], [2, 7], [4, 5], [7, 10], [9, 12]])); // 0
console.log(getRoomNumber(3, [[3, 9], [1, 10], [5, 8], [10, 15], [9, 14], [12, 14], [15, 20]])); // 0
console.log(getRoomNumber(3, [[1, 30], [2, 15], [3, 10], [4, 12], [6, 10]])); // 1
console.log(getRoomNumber(4, [[3, 20], [1, 25], [5, 8], [10, 15], [9, 14], [12, 14], [15, 20]])); // 2