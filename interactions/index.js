const { readdirSync } = require('fs')
const discordApp = require('..')

const ApplicationCommands = []

for (const event of readdirSync(`${__dirname}/events`)) discordApp.on(require(`./events/${event}`).name, (...params) => require(`./events/${event}`).execute(...params))
for (const command of readdirSync(`${__dirname}/commands`)) ApplicationCommands.push(require(`./commands/${command}`))

discordApp.on('interactionCreate', interaction => interaction.isChatInputCommand() && ApplicationCommands.find(command => command.name === interaction.commandName).execute(interaction))
discordApp.on('ready', () => discordApp.application.commands.set(ApplicationCommands))