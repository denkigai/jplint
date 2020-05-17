// const markdown = require("markdown");
const fs = require("fs");

const contents = fs.readFileSync("article.md", { encoding: "utf-8" });
const output = contents
  .split("\n")
  .filter((line) => line !== "")
  .map((line, i) => {
    if (i !== 0 && line.startsWith("####")) {
      return "\n".concat(line, "<br/>");
    }
    if (i !== 0 && line.startsWith("#")) {
      return "\n".concat(line);
    }
    return line.concat("<br/>");
  })
  .filter((line) => line !== "\n")
  .join("");

const outFile = "notion.md";
console.log("Outputing File: " + outFile);
fs.writeFileSync(outFile, output, "utf-8");
