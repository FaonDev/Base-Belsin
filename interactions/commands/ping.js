const Discord = require('discord.js')
const discordApp = require('../..')

module.exports = {
    name: 'ping', description: 'See bot ping.',

    /**
    @param {Discord.ChatInputCommandInteraction} interaction
    */

    async execute(interaction) {
        interaction.reply(`🏓 ${discordApp.ws.ping}`)
    }
}