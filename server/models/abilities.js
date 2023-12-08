"use strict";

export class Abilities {
  constructor(pokemon = [], effectEntry = 0) {
    this.pokemon = pokemon;
    this.effectEntry = effectEntry;
  }

  getPokemon() {
    return this.pokemon;
  }

  getEffectEntry() {
    return this.effectEntry;
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setHeight(effectEntry) {
    this.effectEntry = effectEntry;
  }
}
