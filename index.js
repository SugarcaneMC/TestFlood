const config = require("./config.json");
const stuff = require("./stuff.js");
const mineflayer = require('mineflayer');
config.minecraft.username = `${stuff.randomString(10)}`
console.log(`Attempting to join as ${config.minecraft.username}`)
const mcbot = mineflayer.createBot(config.minecraft);

var actions = [ 'forward', 'back', 'left', 'right']

mcbot.on('spawn', function () {
    var yaw = Math.random() * Math.PI - (0.5 * Math.PI);
    var pitch = Math.random() * Math.PI - (0.5 * Math.PI);
    mcbot.look(yaw, pitch, false);
    lastaction = actions[Math.floor(Math.random() * actions.length)];
    mcbot.setControlState(lastaction, true);
})

mcbot.on('kicked', console.log)
mcbot.on('error', console.log)