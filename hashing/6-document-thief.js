// reports의 길이는 100,000을 넘지 않습니다.
// reports의 원소의 사람이름은 중복된 이름은 없으며, 알파벳 소문자로만 구성됩니다.
// reports의 원소의 시간은 HH:MM형식이며, 그 범위는 00:00부터 24:00까지입니다.
// reports의 원소는 시간순으로 입력되지 않습니다.
// times의 “08:33 09:45”는 특정 범위의 시간이 오전 8시 33분부터 오전 9시 45분까지라는 의미입니다.

const getUser = (arr, range) => {
  const [start, end] = range.split(" ");
  const obj = [];

  for(let i=0 ; i<arr.length ; i++){
    const [name, time] = arr[i].split(" ");
    if(time >= start && time <= end){
      obj.push({
        name: name,
        time: time
      });
    }
  }

  obj.sort((a, b) => {
    return a.time > b.time ? 1 : -1
  })

  const user = [];

  obj.map(o => {
    user.push(o.name);
  });

  return user;
}

console.log(getUser(["john 15:23", "daniel 09:30", "tom 07:23", "park 09:59", "luis 08:57"], "08:33 09:45")); // ["luis", "daniel"]
console.log(getUser(["ami 12:56", "daniel 15:00", "bob 19:59", "luis 08:57", "bill 17:35", "tom 07:23", "john 15:23", "park 09:59"], "15:01 19:59")); // ["john", "bill", "bob"]
console.log(getUser(["cody 14:20", "luis 10:12", "alice 15:40", "tom 15:20", "daniel 14:50"], "14:20 15:20")); // ["cody", "daniel", "tom"]