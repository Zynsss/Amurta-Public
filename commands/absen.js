const { Message, Client } = require("discord.js");

module.exports = {
    name: "absen",
    aliases: ['a'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.reply("https://docs.google.com/forms/d/e/1FAIpQLSe-1RSfhCKmuwUUxud35VhVPYN1K4tcTjcxyQx2pIWYVULwGA/viewform")
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
