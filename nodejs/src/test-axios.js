const axios = require("axios");

const main = async () => {
  console.log("run main");

  try {
    let result = await axios
      .get("http://localhost:8000/api/entity", {
        params: {},
      })
      .then((response) => response.data);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

main();
