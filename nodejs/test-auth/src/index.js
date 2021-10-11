const PORT = process.env.PORT || 4000;
const server = require("./server");

async function main() {
  server.listen(PORT, () => {
    console.log("server is listening on port", PORT);
  });
}

main().catch(async (error) => {
  console.log(error);
  await MongoDB.close();
  process.exit(1);
});
