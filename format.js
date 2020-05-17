// const markdown = require("markdown");
const fs = require("fs");

const contents = fs.readFileSync("article.md", { encoding: "utf-8" });
const output = contents
  .split("\n")
  .map((line) => line.concat("  "))
  .join("\n");

const outFile = "notion.md";
console.log("Outputing File: " + outFile);
fs.writeFileSync(outFile, output, "utf-8");
