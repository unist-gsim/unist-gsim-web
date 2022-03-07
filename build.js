const child = require("child_process");
const fs = require("fs");
const rimraf = require("rimraf");

const buildPath = "./build";
const docsPath = "./docs";
const cnamePath = "./docs/CNAME";

// Build.
child.execSync("react-scripts build", { stdio: "inherit" });

// Backup CNAME.
let cname = "";
if (fs.existsSync(cnamePath)) {
  console.log("Reading CNAME...");
  cname = fs.readFileSync(cnamePath, "utf-8");
}

// Remove "/docs".
if (fs.existsSync(docsPath)) {
  console.log("Removing the previous production build...");
  rimraf.sync(docsPath);
}

// Rename "/build" to "/docs".
console.log("Renaming the new production build directory...");
fs.renameSync(buildPath, docsPath);

// Write CNAME
if (cname !== "") {
  console.log("Restoring CNAME...");
  fs.writeFileSync(cnamePath, cname);
}

console.log("Done.");
