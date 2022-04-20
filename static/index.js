let baseDesignsJson = require('./baseDesigns.json');
let extraConceptsJson = require('./extraConcepts.json');
let foundInJson = require('./foundIn.json');
let descriptorsJson = require('./descriptors.json');
let funStatDescriptors = require('./funStatDescriptors.json');
let typesAndStats = require('./typesAndStats.json');

let baseDesigns = baseDesignsJson.animals
	.concat(baseDesignsJson.objects)
	.concat(baseDesignsJson.urbanLegends)
	.concat(baseDesignsJson.professions);
let extraConcepts = extraConceptsJson.abractIdeas
	.concat(extraConceptsJson.professions);
let foundIn = foundInJson.countries
	.concat(foundInJson.environments);
let descriptors = descriptorsJson.adjectives
	.concat(descriptorsJson.nouns)
	.concat(descriptorsJson.verbs);

module.exports = {
    baseDesigns,
    descriptors,
    extraConcepts,
    foundIn,
    funStatDescriptors: funStatDescriptors.funStatDescriptors,
    typesAndStats
};