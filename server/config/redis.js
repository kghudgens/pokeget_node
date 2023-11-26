"use strict";
import redis from "redis";

const redisClient = redis.createClient();

redisClient.on("error", (err) => console.log("Redis Client Error", err));

async function connectToRedis() {
  try {
    await redisClient.connect();
    console.log("Connected to Redis Database on port 6379");
  } catch (error) {
    console.error("Error connecting to Redis:", error);
  }
}

function saveSearch(name, metadata) {
  redisClient.set(name, metadata);
}

export { saveSearch, connectToRedis };
