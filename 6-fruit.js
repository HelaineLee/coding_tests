// fruit 의 길이는 10,000을 넘지 않습니다. 즉 n은 10,000을 넘지 않습니다.
// 각 바구니에 담기는 과일이 개수는 0부터 50개 까지입니다. (0 <= 과일개수 <= 50)
// A바구니는 사과만 담고, B바구니는 배만 담고, C바구니는 귤만 담습니다.

// 가장 적게 과일이 담겨있는 바구니를 가집니다.
// 모든 학생은 딱 한 번 바구니의 과일 한 개를 다른 학생과 교환할 수 있는 기회가 있습니다.
// 1) 1번 학생부터 번호 순으로 교환을 할 건지 결정합니다.
// 2) 교환을 하는 양쪽 학생이 서로 이득이 되면 무조건 교환을 합니다.
// 즉 양쪽이 모두 가져가는 과일의 개수가 원래 가져가려고 했던 것보다 증가한다면 교환을 무조건 합니다.
// 3) 교환을 할 때는 A바구니는 사과만, B바구니에는 배만, C바구니에는 귤만 담아야 합니다.
// 4) 교환 가능한 학생이 여러명일 경우 가장 번호가 작은 학생과 교환합니다.
// 5) 서로가 이득이 생기는 경우가 존재하지 않으면 교환하지 않는 학생도 있습니다.

const totalFruit = (arr) => {
  const minIdx = [];
  for(let i=0 ; i<arr.length ; i++){
    const min = Math.min(...arr[i]);
    const idxArr = [];
    arr[i].map((a, idx) => {
      if(a === min){
        idxArr.push(idx);
      }
    });
    minIdx.push(idxArr.length !== 3 ? idxArr : []);
  }

  const trade = [];
  for(let i=0 ; i<arr.length-1 ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
      for(let x=0 ; x<minIdx[i].length ; x++){
        for(let y=0 ; y<minIdx[j].length ; y++){
          if(!trade.includes(i) && !trade.includes(j)){
            if(minIdx[i][0] !== minIdx[j][0]){
              if(arr[i][minIdx[i][x]]+1 < arr[i][minIdx[j][y]] && arr[j][minIdx[j][y]]+1 < arr[j][minIdx[i][x]]){
                arr[i][minIdx[i][x]]++;
                arr[i][minIdx[j][y]]--;
                arr[j][minIdx[j][y]]++;
                arr[j][minIdx[i][x]]--;
                trade.push(i);
                trade.push(j);
              }
            }
          }
        }
      }
    }
  }

  let sum = 0;
  for(let i=0 ; i<arr.length ; i++){
    // console.log(arr[i]);
    sum += Math.min(...arr[i]);
  }
  return sum;
}

console.log(totalFruit([[10, 20, 30], [12, 15, 20], [20, 12, 15], [15, 20, 10], [10, 15, 10]])); // 58
console.log(totalFruit([[10, 9, 11], [15, 20, 25]])); // 24
console.log(totalFruit([[0, 3, 27], [20, 5, 5], [19, 5, 6], [10, 10, 10], [15, 10, 5], [3, 7, 20]])); // 32
console.log(totalFruit([[3, 7, 20], [10, 15, 5], [19, 5, 6], [10, 10, 10], [15, 10, 5], [3, 7, 20], [12, 12, 6], [10, 20, 0], [5, 10, 15]])); // 48