"use strict";

import axios from "axios";
import { Pokemon } from "../models/pokemon.js";
import { saveSearch } from "../config/redis.js";

function searchByPokemonName(name) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const responseData = response.data;
      const returnedPokemon = extractValuesFromObject(responseData);
      saveSearch(returnedPokemon.getName(), returnedPokemon);
    })
    .catch((error) => {
      console.log("Error in the Search By Name api call: ", error);
    });
}

function extractValuesFromObject(data) {
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

export { searchByPokemonName };
