// 문자열 s의 길이는 16를 넘지 않습니다.
// 문자열 s는 소문자로만 구성됩니다.

const generateArray = (arr) => {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr.join('')];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]; // Remove the current element
    const perms = generateArray(rest); // Recursively get permutations of the rest

    for (let perm of perms) {
      result.push(arr[i] + perm); // Concatenate current element with each permutation
    }
  }

  return result;
}

const getAllCases = (str) => {
	const obj = [];
	str.split('').map(s => {
		if(obj[s]){
			obj[s]++;
		}else{
			obj[s] = 1;
		}
	});

	let center = '';
	const half = [];

	Object.keys(obj).map(o => {
		if(obj[o] % 2 === 1){
			center += o;
		}else{
			for(let i=0 ; i<obj[o]/2 ; i++){
				half.push(o);
			}
		}
	});

	if(center.length > 1){
		return [];
	}

	const result = [];
	// console.log(half);

	const arr = generateArray(half);
	const set = new Set(arr);
  const unique = [...set];
	// console.log(unique);

	for(let i=0 ; i<unique.length ; i++){
		result.push(`${unique[i]}${center}${unique[i].split('').reverse().join('')}`);
	}

	return result;
}

console.log(getAllCases("aaaabb")); // ['baaaab', 'aabbaa', 'abaaba']
console.log(getAllCases("abbcc")); // ["bcacb","cbabc"]
console.log(getAllCases("abbccee")); // ["bceaecb","becaceb","cbeaebc","cebabec","ebcacbe","ecbabce"]
console.log(getAllCases("abbcceee")); // []
console.log(getAllCases("ffeffaae")); // ["ffeaaeff", "fefaafef", "effaaffe", "ffaeeaff", "fafeefaf", "affeeffa", "feaffaef", "efaffafe", "faeffeaf", "afeffefa", "eaffffae", "aeffffea"]
