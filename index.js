const disc = require("discord.js")
const client = new disc.Client({intents: 32767})
const token= process.env.token
const config = require("./config.json")
client.login(token)
client.on("ready", () => {
  console.log(`Iniciei na brisa ${client.user.username}\n Com: ${client.users.cache.size} users`)


  let canal = client.channels.cache.get(config.canal_ini)
  canal.send({content: "Pega a tampa ae viado!!"})

})
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Famoso Lança Lançando')
})

app.listen(3000)