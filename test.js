const cp = require("child_process");

console.log("-------------------------------------------");
console.log(" No problem on TSC");
console.log("-------------------------------------------");
console.log("npx tsc");
cp.execSync("npx tsc", { stdio: "inherit" });
console.log();

console.log("-------------------------------------------");
console.log(" Bug error on SWC");
console.log("-------------------------------------------");
console.log("npx swc src/index.ts");

try {
  cp.execSync("npx swc src/index.ts", { stdio: "inherit" });
} catch {}
