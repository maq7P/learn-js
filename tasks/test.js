const parts = [
	"а",
	"без",
	"в",
	"во",
	"вы",
	"до",
	"для",
	"за",
	"и",
	"из",
	"или",
	"к",
	"ко",
	"между",
	"на",
	"над",
	"не",
	"нет",
	"но",
	"о",
	"об",
	"около",
	"от",
	"перед",
	"по",
	"под",
	"при",
	"про",
	"с",
	"со",
	"то",
	"у",
	"чем",
	"через",
].join("|");

const formatString = (string) => {
	if (
			typeof string !== "string" ||
			!string.length ||
			(string.split(" ").length < 2 && parts.includes(string))
	)
		return string;

	const needSpaceBeforeArr = ["млн", "тыс", "млрд", "трлн", "$", "₽", "€"];
	const replacementsArray = string.match(/<.*?>/g) || [];
	const trimmedString = replacementsArray.reduce(
			(acc, curr, index) => acc.replace(curr, `%%%${index}%%%`),
			string,
	);
	const partsRegexp = new RegExp(`( |^)(${parts})( |$)`, "gi");
	const needSpaceBeforeRegexp = new RegExp(
			`\\s(${needSpaceBeforeArr.join("|")})`,
			"g",
	);
	const quoteLeftRegexp = /[«'"`]([\wа-я])/gi;
	const quoteRightRegexp = /([\wа-я])[»'"`]/gi;
	const dashRegexp = /[ ](-|–|‒)/g;
	const priceRegexp = /\d+(\s\d{3})+/g;

	const formattedString = trimmedString
			.replace(partsRegexp, match => match.substr(0, match.length - 1) + "&nbsp;")
			.replace(needSpaceBeforeRegexp, match => match.replace(/\s/g, "&nbsp;"))
			.replace(priceRegexp, match => match.replace(/\s/g, "&nbsp;"))
			.replace(quoteLeftRegexp, "&laquo;$1")
			.replace(quoteRightRegexp, "$1&raquo;")
			.replace(
					dashRegexp,
					(match, p1, position) => `${position ? "&nbsp;" : ""}&mdash;`,
			);

	return replacementsArray.reduce(
			(acc, curr, index) => acc.replace(`%%%${index}%%%`, curr),
			formattedString,
	);
};

console.log(formatString('"нет"'))