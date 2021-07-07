const config = require("./config.json");
const stuff = require("./stuff.js");
const mineflayer = require('mineflayer');
config.minecraft.username = stuff.randomString(16)
console.log(`Attempting to join as ${config.minecraft.username}`)
const mcbot = mineflayer.createBot(config.minecraft);


mcbot.on('kicked', console.log)
mcbot.on('error', console.log)