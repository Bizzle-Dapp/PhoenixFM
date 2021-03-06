const { Client, Intents } = require('discord.js');
require('dotenv').config({ path: __dirname + '/.env.local' })
const {
    prefix,
} = require('./config.json');
const {execute, skip, stop} = require("./commands/index");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

const queue = new Map();

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const serverQueue = queue.get(message.guild.id);
    if(message.content.startsWith(`${prefix}are you listening?`)){
        message.channel.send("Yes, I am indeed.");
        return;
    } else if(message.content.startsWith(`${prefix}thank you`)){
        message.channel.send("All within the powers given to me.");
        return;
    } else if(message.content.startsWith(`${prefix}play`)){
        execute(message, serverQueue, queue);
        return;
    } else if(message.content.startsWith(`${prefix}skip`)){
        skip(message, serverQueue);
        return;
    } else if(message.content.startsWith(`${prefix}stop`)){
        stop(message, serverQueue);
        return;
    } else {
        message.channel.send("I'm sorry, I don't understand. Contact Bizzle and he might update me to understand what you're saying...");
    }
})
