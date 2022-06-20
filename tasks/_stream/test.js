const longestConsec = (strarr, k) => {
	if(k > starr.length || k < 0) return ""
	
	return strarr
		.sort((a,b) => b - a)
		.slplice(0, k)
		.join("")
}
