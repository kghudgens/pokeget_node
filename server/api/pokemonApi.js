"use strict";

import axios from "axios";

function searchByPokemonName(name) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      const responseData = response.data;
      console.log(responseData);
    })
    .catch((error) => {
      console.log("Error making call to name api", error);
    });
}

export { searchByPokemonName };
