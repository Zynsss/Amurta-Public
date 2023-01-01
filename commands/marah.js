const { Message, Client } = require("discord.js");

module.exports = {
    name: "marah",
    aliases: ['m'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send("https://media.discordapp.net/attachments/941486773194862612/974469342077018152/unknown.png?width=824&height=816")
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
