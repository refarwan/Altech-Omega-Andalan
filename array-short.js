const ascendingArrayShorting = (array) => {
	let result = [];

	array.map((arrayItem) => {
		let indexHasil = 0;
		for (let index = 0; index < result.length; index++) {
			if (arrayItem > result[index]) {
				indexHasil = index + 1;
			}
		}
		const left = result.slice(0, indexHasil);
		const right = result.slice(indexHasil, result.length);
		result = [...left, arrayItem, ...right];
	});

	return result;
};

const descendingArrayShorting = (array) => {
	let result = [];

	array.map((arrayItem) => {
		let indexHasil = 0;
		for (let index = 0; index < result.length; index++) {
			if (arrayItem < result[index]) {
				indexHasil = index + 1;
			}
		}
		const left = result.slice(0, indexHasil);
		const right = result.slice(indexHasil, result.length);
		result = [...left, arrayItem, ...right];
	});

	return result;
};

module.exports = { ascendingArrayShorting, descendingArrayShorting };
