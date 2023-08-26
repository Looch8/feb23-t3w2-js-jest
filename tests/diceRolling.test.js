const { rollDice } = require("../src/diceRolling");

describe("Casual tabletop gamer wants to...", () => {
	test("...wants to roll a D6 and see a valid result", () => {
		expect(rollDice()).toBeGreaterThan(0);
	});
});

describe("Tabletop RPG gamer...", () => {
	test.skip("...wants to roll a D20 with advantage and see both roll results as well as the best roll", () => {});

	test.skip("...wants to roll a D20 with disadvantage and see both roll results as well as the best roll", () => {});

	//  In D&D, we have these dice:
	// D4, D6, D8, D10, D12, D20, D100

	describe("...wants to roll a variety of dice, specificially, they want to roll a ...", () => {
		test.skip("D4", () => {});

		test.skip("D6", () => {});

		test.skip("D8", () => {});
	});
});
