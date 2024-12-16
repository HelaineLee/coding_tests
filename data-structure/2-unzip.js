// 괄호안의 문자열의 반복횟수는 30을 넘지 않습니다.
// 압축을 해제한 문자열의 최종길이는 1,000을 넘지 않는다.
// 문자열 s의 알파벳은 소문자로만 구성됩니다.

const getIteration = (num, str) => {
  let result = "";
  while(num > 0){
    result += str;
    num--;
  }
  return num === "" ? str : result;
}

const getOriginal = (str) => {
  let origin = "";
  let i=0;
  let num = "";
  let iteration = "";
  let depth = 0;  // 0이면 괄호 밖, 0이 아니면 괄호 안

  while(i<str.length){
    const code = str[i].charCodeAt();
    if(code === 40){  // (
      depth++;
      if(depth > 1){
        iteration += str[i];
      }
    }else if(code === 41){  // )
      depth--;
      if(depth === 0){
        origin += getIteration(num, getOriginal(iteration));
        num = "";
        iteration = "";
      }else{
        iteration += str[i];
      }
    }else{
      if(depth === 0){
        if(code >= 48 && code <= 57){ // 0 ~ 9
          num += str[i];
        }else{  // a ~ z
          origin += str[i];
        }
      }else{
        iteration += str[i];        
      }
    }

    i++;
  }

  return origin;
}

console.log(getOriginal("3(a2(b))ef")); // "abbabbabbef"
console.log(getOriginal("2(ab)k3(bc)")); // "ababkbcbcbc"
console.log(getOriginal("2(ab3((cd)))")); // "abcdcdcdabcdcdcd"
console.log(getOriginal("2(2(ab)3(2(ac)))")); // "ababacacacacacacababacacacacacac"
console.log(getOriginal("3(ab2(sg))")); // "absgsgabsgsgabsgsg"