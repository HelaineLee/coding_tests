// enter의 길이는 100,000을 넘지 않습니다.
// enter 원소의 입력순은 시간순으로 주어집니다.
// enter[i]의 첫 번째 문자열은 i번 고객이 방문한 시간, 두 번째 문자열은 i번 고객이 시술받을레이저 번호입니다.
// 시간은 HH:MM형태이며 09:00부터 20:00까지입니다.
// laser의 길이는 10을 넘지 않습니다.
// laser[i]의 값은 i번 레이저가 한 사람의 고객을 시술하는데 걸리는 시간(분)입니다.

const calculateTime = (time, interval) => {
  const [hr, min] = time.split(':');
  const minute = parseInt(min)+interval;
  const hour = parseInt(hr)+Math.floor(minute/60);
  return `${hour.toString().padStart(2, '0')}:${(minute%60).toString().padStart(2, '0')}`;
}

const getMaxWait = (laser, enter) => {
  const guest = [];

  for(let i=0 ; i<enter.length ; i++){
    const [arrival, idx] = enter[i].split(' ');
    guest.push({
      arrival: arrival,
      time: laser[idx],
    });
  }

  let maxWait = 0;

  guest.map(g => {
    const finish = calculateTime(g.arrival, g.time);
    const waitList = guest.filter(w => w.arrival < finish && w.arrival >= g.arrival);
    // console.log(waitList, g, finish);
    waitList.map((w, idx) => {
      if(idx !== 0){
        w.arrival = finish
        // console.log(w);
      }
    });
    maxWait = Math.max(waitList.length-1, maxWait);
  })

  return maxWait;
}

console.log(getMaxWait([30, 20, 25, 15], ["10:23 0", "10:40 3", "10:42 2", "10:52 3", "11:10 2"])); // 3
console.log(getMaxWait([30, 20, 25, 15], ["10:23 0", "10:40 3", "10:42 2", "10:52 3", "15:10 0", "15:20 3", "15:22 1", "15:23 0", "15:25 0"])); // 4
console.log(getMaxWait([30, 20, 25, 15], ["10:20 1", "10:40 1", "11:00 1", "11:20 1", "11:40 1"])); // 0