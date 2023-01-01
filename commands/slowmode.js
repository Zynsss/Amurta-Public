const { Message, Client } = require("discord.js");
const ms = require('ms');

module.exports = {
    name: "slowmode",
    aliases: ['sm'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468" || message.author.id === "719384166046629890") {
            if (!args[0]) {
                message.channel.setRateLimitPerUser(0)
                message.channel.send('Slowmode has been turned off')
            }

            if (args[0]) {
                const waktu = args[0]
                const milisekon = ms(waktu)

                if (isNaN(milisekon)) return message.channel.send('The time should be a number')
                if (milisekon < 1000) return message.channel.send('Minimum time is 1 second')

                message.channel.setRateLimitPerUser(milisekon / 1000)
                message.channel.send(`Slowmode for this channel has been set to **${ms(milisekon, {
                    long: true,
                })}**`)
            }
        }  else return message.channel.send("You cannot use this command")
    },
};
