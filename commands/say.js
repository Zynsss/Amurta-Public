const { Message, Client } = require("discord.js");

module.exports = {
    name: "say",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468") {
            let toSay = args.join(" ")
            if (!toSay) return message.channel.send({ content: "You have to provide something!" })
            message.channel.send({ content: toSay })
                .then(msg => {
                    setTimeout(() => message.delete(), 10)
                });
        }
    },
};
