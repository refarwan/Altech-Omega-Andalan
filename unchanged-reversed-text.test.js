const unchangedReversedText = require("./unchanged-reversed-text");

test("Unchanged Reversed Text", () => {
	expect(unchangedReversedText("ini")).toBe(true);
	expect(unchangedReversedText("ibu")).toBe(false);
	expect(unchangedReversedText("budi")).toBe(false);
});
