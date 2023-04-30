const Discord = require('discord.js')

module.exports = {
    name: 'messageCreate',

    /**
    @param {Discord.Message} message 
    */

    async execute(message) {
        if (message.content.includes('://')) return message.reply('Você não pode enviar convites de outros servidores aqui.') && message.delete()
        // ...
    }
}