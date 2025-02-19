// 문자열 s의 길이는 50를 넘지 않습니다.
// 문자열 s는 숫자로만 구성되어 있습니다.

const generateArray = (str) => {
	// console.log(str);
	if(str.length <= 1) return [str];
	const result = [];

	const min = 1;
	const max = 26;

	if(parseInt(str[0]) >= min){
		const rest = str.substring(1);
		if(rest[0] !== '0'){
			const combined = generateArray(rest);
			// console.log(rest, combined);

			for(let c of combined){
				result.push(`${str[0]},${c}`);
			}
		}
	}
	
	if(str.length > 1){
		const element = str.substring(0,2);
		if(parseInt(element) <= max){
			const rest = str.substring(2);
			if(rest[0] !== '0'){
				const combined = generateArray(rest);
				// console.log(rest, combined);
	
				for(let c of combined){
					result.push(`${element},${c}`);
				}
			}
		}
	}

	return result;
}

const getRecoverCases = (str) => {
	const arr = generateArray(str);
	// console.log(arr);
	return arr.length;
}

console.log(getRecoverCases("25114")); // 6 (BEAAD, YAAD, YAN, YKD, BEKD, BEAN)
// 5 => 2 5 1 1 4
// 4 => 25 1 1 4 / 2 51 1 4 / 2 5 11 4 / 2 5 1 14
// 3 => 25 11 4 / 25 1 14 / 2 51 14
console.log(getRecoverCases("23251232")); // 12
console.log(getRecoverCases("21020132")); // 2
console.log(getRecoverCases("21350")); // 0
console.log(getRecoverCases("120225")); // 3
console.log(getRecoverCases("232012521")); // 12