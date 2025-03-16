// 문자열 s의 길이는 16를 넘지 않습니다.
// 문자열 s는 숫자로만 구성되어 있습니다.

const validateNumber = (num) => {
	if(parseInt(num) > 255){
		return false;
	}
	if(num.length > 1){
		if(num[0] === '0'){
			return false;
		}
	}
	return true;
}

const generateIP = (str, group) => {
	const result = [];
	if(group === 1){
		return validateNumber(str) ? [str] : [];
	}

	for(let i=1 ; i<=3 ; i++){
		const firstNum = str.substring(0, i);
		if(validateNumber(firstNum)){
			const lastNum = str.slice(i);
			if(lastNum.length > 0){
				const lastIPArr = generateIP(lastNum, group-1);
				lastIPArr.map(a => {
					result.push(`${firstNum}.${a}`);
				});
			}
		}
	}

	return result;
}

const getIPaddresses = (str) => {
	return generateIP(str, 4);
}

// console.log(getIPaddresses("2025505")); // ["20.25.50.5","20.255.0.5","202.5.50.5","202.55.0.5"]
// console.log(getIPaddresses("0000")); // ["0.0.0.0"]
console.log(getIPaddresses("255003")); // ["25.50.0.3","255.0.0.3"]
// 2 55003
// 25 5003
// 255 003
// console.log(getIPaddresses("155032012")); // []
// console.log(getIPaddresses("02325123")); // ["0.23.25.123", "0.23.251.23", "0.232.5.123", "0.232.51.23"]
// console.log(getIPaddresses("121431211")); // ["1.214.31.211", "12.14.31.211", "12.143.1.211", "12.143.12.11", "12.143.121.1", "121.4.31.211", "121.43.1.211", "121.43.12.11", "121.43.121.1"]
