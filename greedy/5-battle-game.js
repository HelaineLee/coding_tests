// students의 길이는 500,000입니다.
// students의 입력순서대로 학생번호는 0번부터입니다.
// 반환값은 학생번호 0번부터 순서대로 반환합니다.

const getMaxPoints = (arr) => {
  const obj = [];
  for(let i=0 ; i<arr.length ; i++){
    const info = arr[i].split(' ');
    obj.push({idx: i, team: info[0], attack: parseInt(info[1])});
  }
  obj.sort((a, b) => b.attack - a.attack);

  const answer = Array.from({length: arr.length}, () => 0);

  for(let i=0 ; i<obj.length ; i++){
    for(let j=i+1 ; j<obj.length ; j++){
      if(obj[i].team !== obj[j].team){
        if(obj[i].attack > obj[j].attack){
          answer[obj[i].idx] += obj[j].attack;
        }
      }
    }
  }

  return answer;
}

console.log(getMaxPoints(["a 20", "b 12", "a 10", "c 11", "e 12"])); // [35, 21, 0, 10, 21]
console.log(getMaxPoints(["a 17", "b 12", "a 10", "c 11", "b 24", "a 25", "b 12"])); // [35, 21, 0, 10, 38, 59, 21]
console.log(getMaxPoints(["b 20", "c 15", "a 200", "b 11", "b 24", "a 25", "b 12"])); // [15, 23, 82, 0, 15, 82, 0]
console.log(getMaxPoints(["a 30", "a 25", "a 25", "b 20", "b 25", "a 25", "b 30"])); // [45, 20, 20, 0, 0, 20, 75]