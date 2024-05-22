const unchangedReversedText = (text) => {
	return text.split("").reverse().join("") === text;
};

module.exports = unchangedReversedText;
