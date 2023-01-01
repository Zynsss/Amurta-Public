const { Message, Client } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: "poll",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        const isi = args.join(' ')
        if (!isi) return message.channel.send("Hey stoopid, how can another people know what you want to ask?")
        const nama =  message.member.displayName
        const judul = nama + ' asks'
        const embed = new Discord.MessageEmbed()
        .setTitle(judul)
        .setDescription(isi)
        .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
        let msgPoll = await message.channel.send({ embeds: [embed] })
        await msgPoll.react('<:yes:881693053587427388>')
        await msgPoll.react('<:no:881692994108006490>')
        await msgPoll.react('<:yntkts:911845701095415809>')
    },
};
