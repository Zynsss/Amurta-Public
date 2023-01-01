const { Message, Client } = require("discord.js");

module.exports = {
    name: "zoom",
    aliases: ['z'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send("https://zoom.us/j/94748598691?pwd=blhsRVFXbzExTDZjZmRXcmtLbGZnQT09#success")
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
