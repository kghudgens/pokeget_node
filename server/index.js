"use strict";
import express from "express";
import cors from "cors";
import { connectToRedis } from "./redis/redis.js";
import { searchByPokemonName, searchForAbilities } from "./api/pokemonApi.js";
import { router } from "./routes/index.js";

const app = express();

app.use(router);
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3001;
connectToRedis();
searchByPokemonName("ditto");
searchForAbilities("torrent");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
