// 3 ≤ n ≤ 100
// trains의 길이는 200개를 넘지 않습니다.
// trains 의 원소인 [s, e, k]의 의미는 기차가 s역에서부터 e역까지 수용인원 k명까지 허용해서 운행한다는 의미입니다. ( 1<= k <= 100)
// bookings의 길이는 10,000을 넘지 않습니다.
// bookings 의 원소인 [a, b]의 의미는 예약한 어린이가 a 번 역에서 승차하여 b 번 역에서 하차한다는 의미합니다.

/*
  n : 역의 갯수
  trains : [출발역, 도착역, 수용인원]
  bookings : [승차역, 하차역]
*/
const getMaxNumber = (n, trains, bookings) => {
  const tickets = []; // 환승 가능
  trains.map(t => {
    for(let i=0 ; i<t[1]-t[0] ; i++){
      for(let j=0 ; j<t[2] ; j++){
        tickets.push(t[0]+i);
      }
    }
  });
  // tickets.sort((a,b) => a-b);
  // console.log(tickets);

  bookings.sort((a, b) => (a[1]-a[0])-(b[1]-b[0]));

  let answer = 0;
  for(let i=0 ; i<bookings.length ; i++){
    // console.log(bookings[i]);
    if(tickets.length > bookings[i][1]-bookings[i][0]){
      const idxArr = [];
      for(let j=bookings[i][0] ; j<bookings[i][1] ; j++){
        const idx = tickets.indexOf(j);
        if(idx !== -1){
          idxArr.push(idx);
        }
      }

      if(idxArr.length === bookings[i][1]-bookings[i][0]){
        for(let j=0 ; j<idxArr.length ; j++){
          tickets.splice(idxArr[j]-j, 1);
          // console.log(tickets.splice(idxArr[j], 1), bookings[i], idxArr[j]);
        }
        // console.log(bookings[i]);
        // console.log(tickets);
        answer++;
      }
    }else{
      break;
    }
  };

  return answer;
}

console.log(getMaxNumber(5, [[1, 4, 2], [2, 5, 1]],
[[1, 2], [1, 5], [2, 5], [2, 4], [2, 5], [2, 3], [3, 5], [3, 4]])); // 5
// [1, 2], [2, 3], [3, 4], [2, 4], [3, 5], [2, 5], [2, 5], [1, 5]
// 1ㅡ2ㅡ3ㅡ4ㅡ5
// oㅡoㅡoㅡo    => [1, 2], [2, 3], [3, 4]
// oㅡoㅡoㅡo    => [3, 5]
//    oㅡoㅡoㅡo => [2, 4]

console.log(getMaxNumber(5, [[2, 3, 1], [1, 5, 1]],
[[2, 5], [1, 5], [1, 3], [2, 4], [2, 5], [2, 3]])); // 2
// [2, 3], [1, 3], [2, 4], [2, 5], [2, 5], [1, 5]
// 1ㅡ2ㅡ3ㅡ4ㅡ5
//    oㅡo      => [2, 3]
// oㅡoㅡoㅡoㅡo => [1, 3]

console.log(getMaxNumber(8, [[1, 8, 3], [3, 8, 1]],
[[1, 3], [5, 8], [2, 7], [3, 8], [2, 7], [2, 8], [3, 8], [6, 8], [7, 8], [5, 8], [2, 5], [2, 7], [3, 7], [3, 8]])); // 7
// [7, 8], [1, 3], [6, 8], [5, 8], [5, 8], [2, 5], [3, 7], [2, 7], [3, 8], [2, 7], [3, 8], [2, 7], [3, 8], [2, 8]
// 1ㅡ2ㅡ3ㅡ4ㅡ5ㅡ6ㅡ7ㅡ8
// oㅡoㅡoㅡoㅡoㅡoㅡoㅡo => [7, 8], [1, 3], [3, 7]
// oㅡoㅡoㅡoㅡoㅡoㅡoㅡo => [6, 8]
// oㅡoㅡoㅡoㅡoㅡoㅡoㅡo => [5, 8], [2, 5]
//       oㅡoㅡoㅡoㅡoㅡo => [5, 8]

console.log(getMaxNumber(9, [[1, 8, 3], [3, 9, 2], [1, 5, 3]],
[[1, 9], [5, 8], [2, 9], [3, 8], [2, 9], [1, 9], [8, 9], [3, 9], [1, 8], [6, 8], [7, 8], [5, 8], [3, 5], [3, 7], [4, 7], [5, 8]])); // 8
console.log(getMaxNumber(9, [[2, 7, 2], [3, 9, 2], [1, 5, 3]],
[[1, 9], [4, 8], [2, 9], [5, 9], [3, 8], [2, 9], [1, 9], [8, 9], [3, 9], [1, 8], [6, 8], [3, 6], [7, 8], [5, 8], [3, 5], [2, 7], [1, 7], [2, 8]])); // 7