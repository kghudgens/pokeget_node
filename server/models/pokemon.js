"use strict";
import { saveSearch } from "./config/redis.js";

class Pokemon {
  constructor(name) {
    this.name = name;
  }

  saveToRedis() {
    saveSearch(this.name);
  }
}
