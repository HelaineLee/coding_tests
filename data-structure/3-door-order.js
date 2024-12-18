// 1 <= n <= 100,000
// 0 <= arrival[i] <= 200,000, arrival[i]는 i번 사원이 현관문에 도착한 시간입니다.
// i < j 이면 arrival[i] <= arrival[j]를 만족합니다.
// 0<= state[i] <= 1, 0은 들어오는 사원, 1은 나가는 사원을 뜻합니다.

const getUseTime = (arrival, state) => {
  const history = [];
  const useTime = [];

  for(let i=0 ; i<arrival.length ; i++){
    history.push({
      emp: i,
      state: state[i],
      time: arrival[i]
    });
    useTime.push(0);
  }
  
  let time = arrival[0];
  let status = state[0]; // 1 = out, 0 = in
  let ignoreStatus = false;
  const maxTime = arrival[arrival.length-1]+arrival.length;

  while(time < maxTime){
    let timeIncrease = 0;

    const timeFilter = history.filter(h => h.time === time);
    if(timeFilter.length > 0){
      const statusFilter = timeFilter.filter(h => h.state === status);
      if(statusFilter.length === 0){
        status = status === 1 ? 0 : 1;
      }

      timeFilter.map(h => {
        // console.log(h, status, ignoreStatus);
        if(timeIncrease === 0 && (h.state === status || ignoreStatus)){
          useTime[h.emp] = time;
          timeIncrease++;
          ignoreStatus = false;
        }else{
          h.time = time+1;
        }
      });
    }else{
      ignoreStatus = true;
    }

    time++;
  }

  return useTime;
}

console.log(getUseTime([0, 1, 1, 1, 2, 3, 8, 8], [1, 0, 0, 1, 0, 0, 1, 0])); // [0, 2, 3, 1, 4, 5, 8, 9]
console.log(getUseTime([3, 3, 4, 5, 5, 5], [1, 0, 1, 0, 1, 0])); // [3, 6, 4, 7, 5, 8]
console.log(getUseTime([2, 2, 2, 3, 4, 8, 8, 9, 10, 10], [1, 0, 0, 0, 1, 1, 0, 1, 1, 0])); // [2, 3, 4, 5, 6, 8, 11, 9, 10, 12]