// 문자열 s의 길이는 100을 넘지 않습니다.

const getFrequency = (str) => {
  const obj = {
    a:0,
    b:0,
    c:0,
    d:0,
    e:0
  }

  let max = 0;

  for(let i=0 ; i<str.length ; i++){
    obj[str[i]]++;
    if(max < obj[str[i]]){
      max = obj[str[i]];
    }
  }

  const arr = [];

  Object.values(obj).map(o => {
    arr.push(max-o);
  });

  return arr;
}

console.log(getFrequency("aaabc")); // [0, 2, 2, 3, 3]
console.log(getFrequency("aabb")); // [0, 0, 2, 2, 2]
console.log(getFrequency("abcde")); // [0, 0, 0, 0, 0]
console.log(getFrequency("abcdeabc")); // [0, 0, 0, 1, 1]
console.log(getFrequency("abbccddee")); // [1, 0, 0, 0, 0]