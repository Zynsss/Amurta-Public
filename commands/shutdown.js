const { Message, Client } = require("discord.js");

module.exports = {
    name: "shutdown",
    aliases: ['sd'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468" || message.author.id === "520607541579743252") {
            message.channel.send("Shutting down...").then(() => {
                client.destroy();
            })
        }
    },
};
