const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// get path to build folder
const buildPath = path.resolve(__dirname, "build");
// delete build folder
fs.removeSync(buildPath);
 
// get path to Campaigns.sol
const campaignPath = path.resolve(__dirname, "contracts", "Inbox.sol");
// read campaign file
const source = fs.readFileSync(campaignPath, "utf8");
// compile contracts and get contracts

module.exports = solc.compile(source, 1).contracts[":Inbox"];