const {
	ascendingArrayShorting,
	descendingArrayShorting,
} = require("./array-short");

test("Ascending Array Sorting", () => {
	expect(ascendingArrayShorting([1, 2, 3])).toEqual([1, 2, 3]);
	expect(ascendingArrayShorting([3, 1, 2])).toEqual([1, 2, 3]);
	expect(ascendingArrayShorting([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
});

test("Descending Array Sorting", () => {
	expect(descendingArrayShorting([1, 2, 3])).toEqual([3, 2, 1]);
	expect(descendingArrayShorting([3, 1, 2])).toEqual([3, 2, 1]);
	expect(descendingArrayShorting([5, 3, 8, 4, 2])).toEqual([8, 5, 4, 3, 2]);
});
