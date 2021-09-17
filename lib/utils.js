export function getGridArea(idx) {
	const a = idx % 4;
	if (a === 0) {
		return "1 / 3";
	} else if (a === 1) {
		return "3 / 4";
	} else if (a === 2) {
		return "1 / 2";
	} else if (a === 3) {
		return "2 / 4";
	}
}
