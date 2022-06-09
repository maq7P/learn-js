//https://www.codewars.com/kata/525f4206b73515bffb000b21/

function add(a, b) {
	a = a.split("").reverse().join("");
	b = b.split("").reverse().join("");

	const lenA = a.length;
	const lenB = b.length;
	let temp = [];
	let bit = 0;

	for(let i = 0; i < Math.max(lenA,lenB); i++){
		let cur;

		if(i >= lenA){
			cur = Number(b[i]);
		} else if( i >= lenB){
			cur =Number(a[i]);
		} else{
			cur = Number(a[i]) + Number(b[i]);
		}

		console.log((cur+bit)%10)
		temp.push((cur+bit)%10);
		bit = Math.floor((cur + bit) / 10);
	}

	if(bit === 1){
		temp.push(1);
	}


	let ans = "";
	for(let i = temp.length - 1 ; i >= 0; i--)
		ans += temp[i];

	return ans;
}

function add2(a, b) {
	let carry = 0, result = [],
			len = Math.max(a.length, b.length), i = len;

	//O(n**2)
	while (i--) {
		let sum = (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
		carry = parseInt(sum / 10);
		result.unshift(sum % 10);
	}

	if (carry) result.unshift(carry);

	return result.join('');
}
