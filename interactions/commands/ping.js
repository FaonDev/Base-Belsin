const Discord = require('discord.js')
const discordApp = require('../..')

module.exports = {
    name: 'ping', description: 'See bot ping.',

    async execute(interaction) {
        interaction.reply(`🏓 ${discordApp.ws.ping}`)
    }
}