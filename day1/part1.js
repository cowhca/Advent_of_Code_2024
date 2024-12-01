import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.resolve("input.txt"), "utf8");
const lines = input.split("\n");

const list1 = [];
const list2 = [];

lines.forEach((line) => {
  const num1 = line.split("   ")[0];
  const num2 = line.split("   ")[1];

  list1.push(num1);
  list2.push(num2);
});

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

let diff = 0;
for (let i = 0; i < list1.length; i++) {
  diff += Math.abs(list1[i] - list2[i]);
}

console.log(diff);
