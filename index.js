const config = require("./config.json");
const mineflayer = require('mineflayer');

const mcbot = mineflayer.createBot(config.minecraft);

counter = 0;

mcbot.on('playerCollect', (collector, collected) => {
    if(collector.username !== mcbot.username) return;
})

mcbot.on('kicked', console.log)
mcbot.on('error', console.log)