"use strict";

export class Pokemon {
  constructor(name = "unknown", id = 0, weight = 0, height = 0) {
    this.name = name;
    this.id = id;
    this.height = height;
    this.weight = weight;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getHeight() {
    return this.height;
  }

  getWeight() {
    return this.weight;
  }

  setName(name) {
    this.name = name;
  }

  setHeight(height) {
    this.height = height;
  }

  setId(id) {
    this.id = id;
  }
  setWeight(weight) {
    this.weight = weight;
  }
}
