const Discord = require('discord.js')

module.exports = {
    name: 'ready',

    async execute(interaction) {
        console.log('Ready!')
        // ...
    }
}