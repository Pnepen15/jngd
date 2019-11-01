const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("639764669254598668")
setInterval(function() {
channel.send(`Pnepen Pnepen Pnpen Pnepen`);
}, 30)
})

client.login(process.env.BOT_TOKEN);