const fishbash = (n) => {
	for (let index = 1; index <= n; index++) {
		let result = "";
		if (index % 3 === 0) result += "fish";
		if (index % 5 === 0) result += "bash";
		if (result === "") result = index;
		console.log(result);
	}
};

fishbash(30);
