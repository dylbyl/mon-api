const baseDesignsJson = require('./baseDesigns.json');
const extraConceptsJson = require('./extraConcepts.json');
const foundInJson = require('./foundIn.json');
const descriptorsJson = require('./descriptors.json');
const funStatDescriptors = require('./funStatDescriptors.json');
const typesAndStats = require('./typesAndStats.json');

const concatenateJsonFile = (file) => {
	let allEntries = [];
	for(category in file) {
		allEntries = allEntries.concat(file[category])
	}
	return allEntries;
}

const baseDesigns = concatenateJsonFile(baseDesignsJson);
const extraConcepts = concatenateJsonFile(extraConceptsJson);
const foundIn = concatenateJsonFile(foundInJson);
const descriptors = concatenateJsonFile(descriptorsJson)



module.exports = {
    baseDesigns,
    descriptors,
    extraConcepts,
    foundIn,
    funStatDescriptors: funStatDescriptors.funStatDescriptors,
    typesAndStats
};