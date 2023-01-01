const { Database } = require('quickmongo');
require('dotenv').config();
const mongoDBURL = process.env.mongoDBURL
const db = new Database(mongoDBURL);
const { Message, Client } = require("discord.js");

module.exports = {
    name: "toggle",
    aliases: ['tg'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        await db.connect()
        if (!message.content.startsWith(prefix)) return
        if (message.author.id === "764456504660328468" || message.author.id === "520607541579743252") {

            function cmdName(x) {
                let a = false
                client.commands.forEach(y => {
                    if (y.name === x) a = y.name;
                });
                return a
            }
            if (!args[0]) return message.channel.send('Please specify on/off')
            if (!args[1]) return message.channel.send("Please provide a command name")
            if (args[1] === 'toggle') return message.channel.send("You can't disable this command")

            if (args[0] == 'on') {
                if (!await cmdName(args[1])) return message.channel.send("No command found with that name!")
                let commandFetch = await db.fetch(`commandToggle_${message.guild.id}`)
                if (commandFetch == null) commandFetch = []
                if (!commandFetch.includes(await cmdName(args[1]))) return message.channel.send('This command is already on')
                const Filtered = commandFetch.filter(x => x !== args[1])
                await db.set(`commandToggle_${message.guild.id}`, Filtered)
                return message.channel.send("Successfully enabled this command!")
            }

            else if (args[0] == 'off') {
                if (!await cmdName(args[1])) return message.channel.send("No command found with that name!")
                let commandFetch = await db.fetch(`commandToggle_${message.guild.id}`)
                if (commandFetch == null) commandFetch = []
                if (commandFetch.includes(await cmdName(args[1]))) return message.channel.send('This command is already off')
                await db.push(`commandToggle_${message.guild.id}`, cmdName(args[1]))
                return message.channel.send("Successfully disabled this command!")
            }
        } else return message.channel.send("You cannot use this command")
    },
};
