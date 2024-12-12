// 문자열 s의 길이는 10,000을 넘지 않습니다.

const getMinimumCnt = (str) => {
  const obj = {};

  for(let i=0 ; i<str.length ; i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    }else{
      obj[str[i]] = 1;
    }
  }

  let cnt = 0;
  const arr = [];

  Object.values(obj).map(o => {
    while(o > 0){
      if(!arr.includes(o)){
        arr.push(o);
        o = 0;
      }else{
        cnt++;
      }
      o--;
    }
  });

  return cnt;
}

console.log(getMinimumCnt("aaabbbcc")); // 2
console.log(getMinimumCnt("aaabbc")); // 0
console.log(getMinimumCnt("aebbbbc")); // 2
console.log(getMinimumCnt("aaabbbcccde")); // 5
console.log(getMinimumCnt("aaabbbcccdddeeeeeff")); // 8