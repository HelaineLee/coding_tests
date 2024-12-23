// score의 길이는 300,000을 넘지 않습니다.
// score의 원소는 100,000을 넘지 않는 자연수입니다.
// 3 <= k <= 100,000

const getLowestAverage = (score, k) => {
  score.sort((a,b) => a-b);
  // score.map(s => console.log(s));

  let avg = 0;
  for(let i=0 ; i<score.length-k+1 ; i++){
    if(score[i+k-1]-score[i] <= 10){
      for(let j=0 ; j<k ; j++){
        avg += score[i+j];
      }
      return Math.floor(avg/k);
    }
  }

  return avg;
}

console.log(getLowestAverage([99, 97, 80, 91, 85, 95, 92], 3)); // 89
console.log(getLowestAverage([92, 90, 77, 91, 70, 83, 89, 76, 95, 92], 4)); // 88
console.log(getLowestAverage([77, 88, 78, 80, 78, 99, 98, 92, 93, 89], 5)); // 92
console.log(getLowestAverage([88, 99, 91, 89, 90, 72, 75, 94, 95, 100], 5)); // 90