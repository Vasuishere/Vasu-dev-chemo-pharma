import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const robotsPath = resolve("src/app/robots.ts");
const source = readFileSync(robotsPath, "utf8");

const requiredSnippets = [
  '"/_next/static/"',
  '"/_next/image"',
];

for (const snippet of requiredSnippets) {
  if (!source.includes(snippet)) {
    throw new Error(`Missing required robots allow entry: ${snippet}`);
  }
}

const forbiddenSnippets = [
  '"/_next/"',
  '"/_next/*"',
];

for (const snippet of forbiddenSnippets) {
  if (source.includes(snippet)) {
    throw new Error(`Unexpected robots disallow entry found: ${snippet}`);
  }
}

console.log("robots.txt source check passed");
