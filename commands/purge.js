const ms = require('ms');
const { Message, Client } = require("discord.js");

module.exports = {
    name: "purge",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468" || message.author.id === "719384166046629890") {
            if (!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
            if (isNaN(args[0])) return message.channel.send('Numbers are only allowed')
            if (parseInt(args[0]) > 99) return message.channel.send('The max amount of messages that I can delete is 99')
            const messages = await message.channel.messages.fetch({
                limit: parseInt(args[0]) + 1,
            })
            const filtered = messages.filter(
                (msg) => Date.now() - msg.createdTimestamp < ms("14 days")
                )
            await message.channel.bulkDelete(filtered)
                .catch(err => console.log(err))
            message.channel.send('Deleted ' + args[0] + " messages.")
            .then(message => {
                setTimeout(() => message.delete(), 5000)
            })
        } else return message.channel.send("You cannot use this command")
    },
};
