const { Message, Client } = require("discord.js");

module.exports = {
    name: "fuck",
    aliases: ['f'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send('https://media.discordapp.net/attachments/941486773194862612/1008001978464481340/88759000204ce60a3b236f28ccbac94a.jpg')
        .then(msg => {
            setTimeout(() => message.delete(), 10)
        });
    },
};
