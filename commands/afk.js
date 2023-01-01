const { Message, Client } = require("discord.js");
const { Database } = require('quickmongo');
require('dotenv').config();
const mongoDBURL = process.env.mongoDBURL
const db = new Database(mongoDBURL);
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "afk",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        await db.connect()
        const content = args.join(" ")
        const waktu = Date.now()
        const namaawal = message.member.displayName
        await db.set(`afk1-${message.author.id}+${message.guild.id}`, content)
        await db.set(`afk2-${message.author.id}+${message.guild.id}`, waktu)
        await db.set(`afk3-${message.author.id}+${message.guild.id}`, namaawal)
        try {
            await message.member.setNickname(message.member.displayName + ' [AFK]')
        } catch (err) {
            message.channel.send('Error when setNickname')
        }
        const embed = new MessageEmbed()
            .setDescription(`You have been set to afk\n**Reason :** ${content}`)
            .setColor("RANDOM")
            .setAuthor(namaawal, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send({ embeds: [embed] })
    },
};
