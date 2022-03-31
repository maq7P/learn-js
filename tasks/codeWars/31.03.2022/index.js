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
