const { Message, Client } = require("discord.js");

module.exports = {
    name: "pas",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send("https://media.discordapp.net/attachments/867050907032354857/1047061462083977236/image.png")
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};