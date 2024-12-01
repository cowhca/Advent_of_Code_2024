import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8");
const lines = input.split("\n");

const list = [];
const occurenceMap = {};

lines.forEach((line) => {
  const num1 = line.split("   ")[0];
  const num2 = line.split("   ")[1];

  list.push(num1);
  occurenceMap[num2] = occurenceMap[num2] ? occurenceMap[num2] + 1 : 1;
});

let count = 0;
for (let i = 0; i < list.length; i++) {
  const num = list[i];
  const occurences = occurenceMap[num] ?? 0;
  count += num * occurences;
}
console.log(count);
