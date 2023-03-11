export default function parseQuery(query) {
	const filters = {};
	const pag = {};
	for (const [filter, val] of Object.entries(query)) {
		if (filter === "from" || filter === "limit") {
			pag[filter] = Number.parseInt(val);
		} else {
			filters[filter] = isNaN(val) ? val : Number.parseInt(val);
		}
	}
	return { filters, pag };
}
