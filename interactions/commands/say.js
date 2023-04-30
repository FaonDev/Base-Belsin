const Discord = require('discord.js')

module.exports = {
    name: 'say', description: 'Send a simple message.', options: [
        { name: 'content', description: 'Message content.', required: true, type: 3 }
    ],

    /**
    @param {Discord.ChatInputCommandInteraction} interaction
    */

    async execute(interaction) {
        interaction.reply(interaction.options.getString('content'))
    }
}