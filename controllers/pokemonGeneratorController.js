const PokemonGenerator = require("./pokemonGenerator");

exports.getStaticMon = function (requestBody) {
	let generator = new PokemonGenerator();
	return generator.staticMon;
};

exports.getRandomMon = function (requestBody) {
	let today = new Date();
	let generator = new PokemonGenerator(today);
	let randomMon = generator.generateMon();
	return randomMon;
}

exports.getCurrentDateMon = function (requestBody) {
	let today = new Date();
	today.setHours(0, 0, 0, 0);
	let generator = new PokemonGenerator(today);
	let currentDateMon = generator.generateMon();
	return currentDateMon;
}
