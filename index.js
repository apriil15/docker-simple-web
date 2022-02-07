const express = require("express");
const redis = require("redis");

const redisKey = "visiters";
const port = 8080;

let redisClient;

flow();

async function flow() {
  redisClient = await getRedisClient();

  const app = express();

  app.get("/", normalFunc);
  app.get("/restart", restartFunc);

  app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`);
  });
}

async function getRedisClient() {
  const redisClient = redis.createClient({
    socket: {
      host: "redis-server", // use service name in docker-compose
      port: 6379,
    },
  });
  await redisClient.connect();
  console.log("redis connect");

  // init some key
  await redisClient.set(redisKey, 0);

  return redisClient;
}

async function normalFunc(req, res) {
  const result = await redisClient.get(redisKey);

  res.status(200).json({ visits: result });

  await redisClient.set(redisKey, parseInt(result) + 1);
}

function restartFunc(req, res) {
  console.log("process exit, the container is going to restart");
  process.exit(0);
}
