const { Client } = require('discord.js')
require('dotenv').config()

const discordApp = new Client({
    intents: [1, 512, 32768]
})

discordApp.login(process.env.TOKEN)
module.exports = discordApp
require('./interactions')