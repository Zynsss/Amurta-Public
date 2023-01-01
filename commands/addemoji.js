const { Message, Client } = require("discord.js");

module.exports = {
    name: "addemoji",
    aliases: ['ae'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468") {
            const link = args[0]
            if (!link) return message.channel.send("Invalid link!")
            const nama = args[1]
            if (!nama) return message.channel.send("Where is the name stoopid?")
            message.guild.emojis.create(`${link}`, `${nama}`)
                .then(emoji => message.channel.send(`Created new emoji with name ${emoji.name}!`))
                .catch(console.error);
        } else return message.channel.send("You cannot use this command")
    },
};
