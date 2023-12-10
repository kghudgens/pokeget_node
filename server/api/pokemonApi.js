"use strict";

import axios from "axios";
import { Pokemon } from "../models/pokemon.js";
import { saveSearch } from "../../db/redis/redis.js";

function searchByPokemonName(name) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const responseData = response.data;
      const returnedPokemon = extractValuesFromPokemon(responseData);
      saveSearch(returnedPokemon.getName(), returnedPokemon);
    })
    .catch((error) => {
      console.log("Error in the Search By Name api call: ", error);
    });
}

// get habitat
function searchForAbilities(name) {
  axios
    .get(`https://pokeapi.co/api/v2/ability/${name}/`)
    .then((response) => {
      const responseData = response.data;
      const returnedPokemonAbility = extractValuesFromAbility(responseData);
    })
    .catch((error) => {
      console.log(
        "Error in the Search By Name For Abilities api call: ",
        error
      );
    });
}

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

// Types

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

export { searchByPokemonName, searchForAbilities };
