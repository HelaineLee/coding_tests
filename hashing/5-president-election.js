// 학생의 수는 1,000을 넘지 않습니다.
// 모든 학생이 추천을 하는 것은 아닙니다. 할 수도 있고, 안 할 수도 있습니다.
// 한 학생이 동일 학생을 여러번 중복으로 추천하는 입력은 없습니다.

const getGiftedStudent = (arr, cnt) => {
  const voter = {}; // 추천한 학생
  const voted = {}; // 추천 받은 학생

  for(let i=0 ; i<arr.length ; i++){
    const vote = arr[i].split(" ");
    if(voted[vote[1]]){
      voted[vote[1]]++;
    }else{
      voted[vote[1]] = 1;
    }
  }

  for(let i=0 ; i<arr.length ; i++){
    const vote = arr[i].split(" ");
    if(voted[vote[1]] >= cnt){
      if(voter[vote[0]]){
        voter[vote[0]]++;
      }else{
        voter[vote[0]] = 1;
      }
    }
  }

  let gifted = [];
  let maxGifted = 0;

  Object.keys(voter).map(v => {
    if(voter[v] > maxGifted){
      maxGifted = voter[v];
      gifted = [v];
    }else if(voter[v] === maxGifted){
      gifted.push(v);
    }
  });

  gifted.sort();
  return gifted[0];
}

console.log(getGiftedStudent(["john tom", "daniel luis", "john luis", "luis tom", "daniel tom", "luis john"], 2)); // "daniel"
console.log(getGiftedStudent(["john tom", "park luis", "john luis", "luis tom", "park tom", "luis john", "luis park", "park john", "john park", "tom john", "tom park", "tom luis"], 3)); // "john"
console.log(getGiftedStudent(["cody tom", "john tom", "cody luis", "daniel luis", "john luis", "luis tom", "daniel tom", "luis john"], 2)); // "cody"
console.log(getGiftedStudent(["bob tom", "bob park", "park bob", "luis park", "daniel luis", "luis bob", "park luis", "tom bob", "tom luis", "john park", "park john"], 3)); // "luis"