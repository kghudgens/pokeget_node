import { Pokemon } from "../models/pokemon.js";

function extractValuesFromAbility(data) {
  const extractedDataMap = new Map();
  const extractedResponseData = new Map();
  const propertiesToExtract = ["pokemon", "effect_entries"];
  const pokemonFromAbilities = [];

  for (let i = 0; i < propertiesToExtract.length; i++) {
    // update this switch statement if more props to extract come about
    switch (i) {
      case 0:
        extractedResponseData.set("pokemon", data[propertiesToExtract[i]]);
        break;
      case 1:
        extractedResponseData.set(
          "effect_entries",
          data[propertiesToExtract[i]]
        );
    }
    console.log(extractedResponseData);
    // need to remove teh is hidden
    // need to remove the slot
    // need to dig into the pokemon object
    // need to remove language, make sure in english
    //
  }
}
function extractValuesFromPokemon(data) {
  const extractedDataMap = new Map();
  const propertiesToExtract = ["height", "id", "weight", "name"];
  let counter = 0;

  while (counter < propertiesToExtract.length) {
    for (const prop in data) {
      if (prop === propertiesToExtract[counter]) {
        extractedDataMap.set(prop, data[prop]);
        continue;
      }
    }
    counter += 1;
  }
  const newPokemon = new Pokemon(
    extractedDataMap.get("name"),
    extractedDataMap.get("id"),
    extractedDataMap.get("weight"),
    extractedDataMap.get("height")
  );

  return newPokemon;
}

export { extractValuesFromAbility, extractValuesFromPokemon };
