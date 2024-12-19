// tasks의 길이는 10,000 이하의 자연수입니다.
// 각 작업의 호출시간과 실행시간은 10,000을 넘지 않습니다.

// 1) 한 번에 한 개의 작업을 할 수 있고, 한 번 실행된 작업은 중간에 멈추지 않습니다.
// 2) 대기상태에 있는 작업이 많을 경우 그 중 실행시간이 가장 작은 작업을 먼저 처리하며,
// 실행시간이 같은 작업의 경우는 작업번호가 작은 것을 먼저 처리합니다.
// 3) cpu는 한 작업이 끝나면 바로 다른 작업을 할 수 있습니다.
// 만약 어떤 작업이 5초에 끝나면 5초에 바로 다른 작업을 할 수 있습니다.

const getOrder = (tasks) => {
  let currentTime = tasks[0][0];
  tasks[0].push(0);

  for(let i=1 ; i<tasks.length ; i++){
    if(currentTime > tasks[i][0]){
      currentTime = tasks[i][0];
    }
    tasks[i].push(i);
  }

  tasks.sort((a,b) => a[1]-b[1]);

  const order = [];

  while(order.length < tasks.length){
    const sameTime = tasks.filter(t => t[0] === currentTime);
    const idx = sameTime[0][2];
    order.push(idx);

    let nextTime = 0;
    tasks.map(t => {
      if(t[0] >= currentTime && t[2] !== idx){
        t[0] = Math.max(t[0], currentTime+sameTime[0][1]);
        if(nextTime === 0){
          nextTime = t[0];
        }else{
          nextTime = Math.min(nextTime, t[0]);
        }
      }
    });

    currentTime = nextTime;
  }

  return order;
}

console.log(getOrder([[2, 3], [1, 2], [8, 2], [3, 1], [10, 2]])); // [1, 3, 0, 2, 4]
console.log(getOrder([[5, 2], [7, 3], [1, 3], [1, 5], [2, 2], [1, 1]])); // [5, 4, 2, 0, 1, 3]
console.log(getOrder([[1, 2], [2, 3], [1, 3], [3, 3], [8, 2], [1, 5], [2, 2], [1, 1]])); // [7, 0, 6, 1, 4, 2, 3, 5]
console.log(getOrder([[999, 1000], [996, 1000], [998, 1000], [999, 7]])); // [1, 3, 0, 2]