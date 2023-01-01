const { Message, Client } = require("discord.js");

module.exports = {
    name: "thankyou",
    aliases: ['ty'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send("https://media.discordapp.net/attachments/941486773194862612/985518018031394866/unknown.png?width=1450&height=816")
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
