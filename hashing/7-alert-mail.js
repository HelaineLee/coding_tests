// reports의 길이는 100,000을 넘지 않습니다.
// reports의 원소의 직원이름은 중복된 이름은 없으며(동명이인이 없다는 의미), 알파벳 소문자로만 구성됩니다.
// reports의 원소의 시간은 HH:MM형식이며, 그 범위는 00:00부터 24:00까지입니다.
// reports의 원소는 시간순으로 입력됩니다.
// reports의 원소의 in은 보안실에 입장한 경우이며, out은 보안실에서 퇴장한 경우입니다.
// 한직원이 보안실을 입장하고 퇴장하기를 여러번 할 수 있습니다. 입장한 직원은 반드시 퇴장을 합니다.
// time의 자연수로 분단위 시간을 의미합니다.
// time이 60이면 60분을 의미하며 특정 직원이 보안실을 60분을 초과해서 이용했다면 경고 메일이 발송됩니다.

const getTimeDifference = (start, end) => {
  const [startHour, startMin] = start.split(":");
  const [endHour, endMin] = end.split(":");

  const difference = (endHour-startHour)*60+parseInt(endMin)-startMin;
  return difference;
}

const getMailedEmployees = (arr, time) => {
  const inObj = {};
  const timeObj = {};

  for(let i=0 ; i<arr.length ; i++){
    const [name, time, flag] = arr[i].split(" ");
    if(flag === 'in'){
      inObj[name] = time;
    }else{
      const difference = getTimeDifference(inObj[name], time);
      timeObj[name] = timeObj[name] ? timeObj[name]+difference : difference;
    }
  }

  const employees = [];

  Object.keys(timeObj).map(t => {
    if(timeObj[t] >time){
      employees.push(t);
    }
  })

  return employees.sort();
}

console.log(getMailedEmployees(["john 09:30 in", "daniel 10:05 in", "john 10:15 out", "luis 11:57 in", "john 12:03 in", "john 12:20 out", "luis 12:35 out", "daniel 15:05 out"], 60)); // ["daniel", "john"]
console.log(getMailedEmployees(["bill 09:30 in", "daniel 10:00 in", "bill 11:15 out", "luis 11:57 in", "john 12:03 in", "john 12:20 out", "luis 14:35 out", "daniel 14:55 out"], 120)); // ["daniel", "luis"]
console.log(getMailedEmployees(["cody 09:14 in", "bill 09:25 in", "luis 09:40 in", "bill 10:30 out", "cody 10:35 out", "luis 10:35 out", "bill 11:15 in", "bill 11:22 out", "luis 15:30 in", "luis 15:33 out"], 70)); // ["bill", "cody"]
console.log(getMailedEmployees(["chato 09:15 in", "emilly 10:00 in", "chato 10:15 out", "luis 10:57 in", "daniel 12:00 in", "emilly 12:20 out", "luis 11:20 out", "daniel 15:05 out"], 60)); // ["daniel", "emilly"]