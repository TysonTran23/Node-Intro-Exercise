const fs = require("fs");
const process = require("process");
const axios = require("axios");

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR:", err);
      process.exit(1);
    }
    console.log("Data:", data);
  });
}

async function webCat(URL) {
  try {
    let response = await axios.get(URL);
    console.log(response.data);
  } catch (err) {
    console.log("ERROR:", err);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
