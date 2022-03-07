const Discord = require("discord.js");
const { Client, Collection } = require('discord.js');
const client = new Discord.Client({intents: 32767});
const config = require("./config.json");
const { TOKEN, PREFIX} = require("./config.json");
const fs = require('fs')
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands");
client.events = new Collection();
client.slashCommands = new Collection();
client.config = require('./config.json')

module.exports = client;


["Command", "Event", "Slash","antiCrash"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});
client.once('ready', async () => {
    console.log("✅ - Logado em "+client.user.username+" com sucesso!")
    let a1 = ["Digite ny!help",
     "Tava eu e o meu bonde, apavorando na festa ",
    "Aee Tô vivo",
    "Humildade Sempre"],
    i = 0;
    setInterval(() => client.user.setActivity(`${a1[i++ % a1.length]}`,{
    type:"PLAYING"}
    ), 5000)
})
