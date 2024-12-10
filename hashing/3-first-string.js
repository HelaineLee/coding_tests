// 문자열 s의 길이는 100을 넘지 않습니다.
// 문자열은 소문자로만 이루어져 있습니다.

const getIndex = (str) => {
  const obj = {};

  for(let i=0 ; i<str.length ; i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    }else{
      obj[str[i]] = 1;
    }
  }

  let idx = -1;

  Object.keys(obj).map(o => {
    if(obj[o] === 1 && idx === -1){
      idx = str.indexOf(o)+1;
    }
  });

  return idx;
}

console.log(getIndex("statitsics")); // 3
console.log(getIndex("aabb")); // -1
console.log(getIndex("stringshowtime")); // 3
console.log(getIndex("abcdeabcdfg")); // 5