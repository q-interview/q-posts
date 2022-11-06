/* eslint-disable */

const { promises: fsPromises } = require("fs");

async function asyncReadFile() {
  try {
    const exampleEnv = await fsPromises.readFile(".env.example", "utf-8");

    console.log("Reading example file 📖");

    return exampleEnv;
  } catch (err) {
    console.log("Could not read file because -> ", err);
  }
}

async function writeLocalEnv() {
  try {
    const exampleEnv = await asyncReadFile();
    console.log("Writing local file 📖");
    await fsPromises.writeFile(".env.local", exampleEnv);
  } catch (err) {
    console.log("Failed writing because ->", err);
  }
}

writeLocalEnv();
