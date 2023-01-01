const { Message, Client } = require("discord.js");

module.exports = {
    name: "weekly",
    aliases: ['w'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send("https://media.discordapp.net/attachments/941486773194862612/997390425402908743/20220715_133320.jpg")
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            message.channel.send("https://media.discordapp.net/attachments/941486773194862612/998928730917445702/20220719_192520_0000.png?width=1133&height=816")
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
