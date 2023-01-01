const { Message, Client } = require("discord.js");

module.exports = {
    name: "removeemoji",
    aliases: ['re'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468") {
            const nama = args[0]
            if (!nama) return message.channel.send("Where is the name stoopid?")
            const emoji = await message.guild.emojis.cache.find(emoji => emoji.name == `${nama}`)
            emoji.delete()
                .then(emoji => message.channel.send(`Deleted emoji with name ${emoji.name}!`))
                .catch(console.error);
        } else return message.channel.send("You cannot use this command")
    },
};
