const redis = require("redis");
const client = redis.createClient();

client.del("hello", (err, reply) => {
  if (err) return console.log("Error:", err);

  console.log("Reply:", reply);
});

client.quit();
