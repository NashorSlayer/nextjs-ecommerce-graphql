const fs = require("fs");
const path = require("path");

const tsconfig = path.resolve(__dirname, "tsconfig.json");

const config = require(tsconfig);

config.compilerOptions.jsx = "react";

fs.writeFileSync(tsconfig, JSON.stringify(config, null, 2));