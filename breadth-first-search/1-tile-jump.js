// nums의 길이는 100을 넘지 않습니다.
// 0 <= nums[i] // <= 10

const getMinimumJump = (arr) => {
	if(arr.length === 1){	// 도착
		return 0;
	}

	if(arr[0] === 0){	// 진행 불가능
		return -1;
	}

	let answer = -1;
	for(let i=1 ; i<=arr[0] ; i++){
		const nextArr = arr.slice(i);

		if(nextArr.length > 0){
			const jump = getMinimumJump(nextArr);
			// console.log(arr, nextArr, jump);
			if(jump > -1){
				answer = answer === -1 ? jump+1 : Math.min(answer, jump+1);
			}
		}

	}

	return answer;
}

// console.log(getMinimumJump([1, 2, 0, 1])); // 2
// 1 2 0 0
// console.log(getMinimumJump([2, 1, 1])); // 1
// 2 0 0
console.log(getMinimumJump([2, 2, 1, 2, 1, 1])); // 3
// 2 0 1 2 0 0
// 1 2 0 2 0 0
console.log(getMinimumJump([1, 0, 1, 1, 3, 1, 2, 1])); // -1
console.log(getMinimumJump([2, 3, 1, 0, 1, 1, 2, 3, 1, 5, 1, 3, 1])); // 7
// 1 3 0 0 1 1 1 2 0 3 0 0 0 => 7
// 1 3 0 0 1 1 2 0 1 3 0 0 0 => 7
console.log(getMinimumJump([1, 2, 1, 2, 1, 2, 1, 1, 3, 1, 2, 1])); // 6
console.log(getMinimumJump([1, 3, 2, 1, 1, 2, 3, 1, 3, 1, 2, 3, 5, 1, 5, 1, 2, 1, 1])); // 8
