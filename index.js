const config = require("./config.json");
const mineflayer = require('./mineflayer/index.js');

const mcbot = mineflayer.createBot(config.minecraft);

mcbot.on('playerCollect', (collector, collected) => {
    console.log(collector.username);
})

bot.on('kicked', console.log)
bot.on('error', console.log)