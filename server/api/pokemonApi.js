"use strict";

import axios from "axios";

function searchByPokemonName(name) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const responseData = response.data;
      extractValuesFromObject(responseData);
    })
    .catch((error) => {
      console.log("Error making call to name api", error);
    });
}

function extractValuesFromObject(data) {
  for (const pokemonValue in data) {
    console.log(`${pokemonValue}: ${data[pokemonValue]}`);
    if (typeof data[pokemonValue] === "object") {
      extractValuesFromObject(data[pokemonValue]);
    }
  }
}

export { searchByPokemonName };

//The api call im working against returns this
// {
//   abilities: [
//     { ability: [Object], is_hidden: false, slot: 1 },
//     { ability: [Object], is_hidden: true, slot: 3 }
//   ],
//   base_experience: 101,
//   forms: [
//     {
//       name: 'ditto',
//       url: 'https://pokeapi.co/api/v2/pokemon-form/132/'
//     }
//   ],
//   game_indices: [
//     { game_index: 76, version: [Object] },
//     { game_index: 76, version: [Object] },
//     { game_index: 76, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] },
//     { game_index: 132, version: [Object] }
//   ],
//   height: 3,
//   held_items: [
//     { item: [Object], version_details: [Array] },
//     { item: [Object], version_details: [Array] }
//   ],
//   id: 132,
//   is_default: true,
//   location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/132/encounters',
//   moves: [ { move: [Object], version_group_details: [Array] } ],
//   name: 'ditto',
//   order: 214,
//   past_abilities: [],
//   past_types: [],
//   species: {
//     name: 'ditto',
//     url: 'https://pokeapi.co/api/v2/pokemon-species/132/'
//   },
//   sprites: {
//     back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
//     back_female: null,
//     back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
//     back_shiny_female: null,
//     front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
//     front_female: null,
//     front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
//     front_shiny_female: null,
//     other: {
//       dream_world: [Object],
//       home: [Object],
//       'official-artwork': [Object]
//     },
//     versions: {
//       'generation-i': [Object],
//       'generation-ii': [Object],
//       'generation-iii': [Object],
//       'generation-iv': [Object],
//       'generation-v': [Object],
//       'generation-vi': [Object],
//       'generation-vii': [Object],
//       'generation-viii': [Object]
//     }
//   },
//   stats: [
//     { base_stat: 48, effort: 1, stat: [Object] },
//     { base_stat: 48, effort: 0, stat: [Object] },
//     { base_stat: 48, effort: 0, stat: [Object] },
//     { base_stat: 48, effort: 0, stat: [Object] },
//     { base_stat: 48, effort: 0, stat: [Object] },
//     { base_stat: 48, effort: 0, stat: [Object] }
//   ],
//   types: [ { slot: 1, type: [Object] } ],
//   weight: 40
// }
