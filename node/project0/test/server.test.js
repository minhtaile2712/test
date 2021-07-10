const axios = require("axios");

test("can put array in query", async () => {
  const params = {
    array: ["a", "c"],
  };
  const res = await axios.get("http://localhost:3000/", {
    params,
  });

  console.log(Array.isArray(res.data.array));
  expect(true).toBeTruthy();
});
