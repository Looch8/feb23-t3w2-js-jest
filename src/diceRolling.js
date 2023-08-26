function rollDice(diceSize = 6) {
	let diceTotal = Math.floor(Math.random() * diceSize) + 1;

	return diceTotal;
}

module.exports = {
	rollDice,
};
