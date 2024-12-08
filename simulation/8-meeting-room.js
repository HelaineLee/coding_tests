// 2 <= n <= 100

const getMeetingNumber = (enter, exit) => {
  const answer = Array.from({length: enter.length}, () => 0);

  for(let i=1 ; i<=enter.length ; i++){  // 1 2 3 4
    for(let j=i+1 ; j<=enter.length ; j++){ // 2 4 1 3
        const enterIndexOfI = enter.indexOf(i);
        const enterIndexOfJ = enter.indexOf(j);
        const exitIndexOfI = exit.indexOf(i);
        const exitIndexOfJ = exit.indexOf(j);

        // 입실/퇴실 순서 역전
        if( (enterIndexOfI-enterIndexOfJ) * (exitIndexOfI-exitIndexOfJ) < 0 ){
          answer[i-1]++;
          answer[j-1]++;
        }else{
          const enterNext = enter.slice(enterIndexOfI > enterIndexOfJ ? enterIndexOfI+1 : enterIndexOfJ+1);
          const exitPrev = exit.slice(0, exitIndexOfI < exitIndexOfJ ? exitIndexOfI : exitIndexOfJ);
          if(enterNext.length > 0 && exitPrev.length > 0){
            // console.log(i, j, enterNext, exitPrev);
            for(let x=0 ; x<enterNext.length ; x++){
              if(exitPrev.includes(enterNext[x])){
                answer[i-1]++;
                answer[j-1]++;
                break;
              }
            }
          }
        }
    }
  }
  return answer;
}

console.log(getMeetingNumber([1, 2, 3, 4], [2, 4, 1, 3])); // [3, 1, 2, 2]
console.log(getMeetingNumber([1, 2, 5, 3, 4], [2, 3, 1, 4, 5])); // [3, 1, 2, 1, 3]
console.log(getMeetingNumber([1, 3, 2, 4, 5, 7, 6, 8], [2, 3, 5, 6, 1, 4, 8, 7])); // [6, 2, 2, 4, 2, 3, 4, 1]
console.log(getMeetingNumber([1, 4, 7, 2, 3, 5, 6], [5, 2, 6, 1, 7, 3, 4])); // [6, 5, 6, 6, 5, 4, 6]
console.log(getMeetingNumber([1, 4, 2, 3], [2, 1, 4, 3])); // [2, 2, 0, 2]