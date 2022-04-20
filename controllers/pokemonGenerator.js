var jsonFiles = require("../static/index.js");
var randomSeed = require('random-seed');

class PokemonGenerator {
	constructor(seed) {
		this.randomizer = randomSeed.create(seed);;
		this.seed = seed;
	}

	staticMon = {
		baseDesign: "cat",
		type1: "grass",
		type2: "ghost",
		descriptors: ["capricious", "attention-seeking"],
	};

	types = jsonFiles.typesAndStats.types;
	baseDesigns = jsonFiles.baseDesigns;
	extraConcepts = jsonFiles.extraConcepts;
	descriptors = jsonFiles.descriptors;
	foundIn = jsonFiles.foundIn;
	stats = jsonFiles.typesAndStats.stats;
	funStatDescriptors = jsonFiles.funStatDescriptors;

	generateMon = function () {
		let types = this.generateTypes();

		let randomMon = {
			...types,
			baseDesigns: this.generateRandomProperties(this.baseDesigns, 3),
			descriptors: this.generateRandomProperties(this.descriptors, 3),
			extraConcepts: this.generateRandomProperties(this.extraConcepts, 3),
			foundIn: this.generateRandomProperties(this.foundIn, 3),
			isLegendary: this.generateBooleanWithChanceToBeTrue(10),
			evolutionStages: this.randomizer(3) + 1,
			hasMegaEvolution: this.generateBooleanWithChanceToBeTrue(25),
			hasAlternateForm: this.generateBooleanWithChanceToBeTrue(35),
			stats: this.generateStats(),
			seed: this.seed,
			generatedOn: new Date(),
		};
		return randomMon;
	};

	generateRandomProperties(property, amount = 1) {
		let properties = [];
		for (let i = 0; i < amount; i++) {
			let randomProperty = this.generateOneRandomProperty(property);
			// If this random property has already been picked, pick another
			while(properties.includes(randomProperty)){
				randomProperty = this.generateOneRandomProperty(property);
			}
			properties.push(randomProperty);
		}
		return properties;
	}

	generateOneRandomProperty(property) {
		return property[this.randomizer(property.length)];
	}

	generateTypes() {
		// Not all Pokemon have two types, some only have one
		let hasSecondType = this.generateBooleanWithChanceToBeTrue(75);
		let types = this.generateRandomProperties(this.types, hasSecondType ? 2 : 1);

		return {
			type1: types[0],
			type2: hasSecondType ? types[1] : null,
		}
	}

	generateBooleanWithChanceToBeTrue(chance) {
		// Calculates a random number, then compares to the argument chance
		// Approximately calculates a boolean with a specific chance to be true
		return this.randomizer(100) <= chance;
	}

	generateEvolutionStages() {
		// Pokemon must have a minimum of 1 stage, and a maximum of 3
		// random-seed will generate a number with a min of 0, max of 2, then we add 1 to it
		return this.randomizer(3) + 1;
	}

	generateStats() {
		let stats = [];
		for (let i = 0; i < 6; i++) {
			let stat = this.stats[i] + " that is " + this.generateOneRandomProperty(this.funStatDescriptors).toLowerCase()
			stats.push(stat);
		}
		return stats;
	}
}

module.exports = PokemonGenerator;
