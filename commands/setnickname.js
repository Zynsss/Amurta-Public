const { Message, Client } = require("discord.js");

module.exports = {
    name: "setnickname",
    aliases: ['sn'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468" || message.author.id === "719384166046629890") {
            const nama = args.slice(1).join(' ')
            let target = message.guild.members.cache.get(args[0]) || message.mentions.member.first()
            const member = message.guild.members.cache.get(target.id)
            await member.setNickname(nama)
            message.channel.send(`<@${member.user.id}> nickname set to ` + "`" + nama + "`")
            } else return message.channel.send("You cannot use this command")
    },
};
