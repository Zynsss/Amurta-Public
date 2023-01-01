const Discord = require("discord.js");
const ms = require("ms");
const moment = require('moment');
const { Message, Client } = require("discord.js");

module.exports = {
    name: "remind",
    aliases: ['r'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        let time = args[0]
        if (!time) return message.channel.send("State the time stoopid")
        let reminder = args.slice(1).join(' ');
        if (!reminder) return message.channel.send("Hey stoopid, state the reminder haiya")
        const nama = message.member.displayName
        const waktu = Date.now()
        const waktuindo = moment(waktu).utcOffset(7)
        const msnanti = ms(time)
        const waktunanti = moment(waktuindo).add(msnanti, 'millisecond')
        const formatwaktu = moment(waktunanti).format("dddd, Do MMMM YYYY, h:mm:ss A")

        const setEmbed = new Discord.MessageEmbed()
        .setAuthor(nama, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Succesfully set your reminder\n**Reminder :** ${reminder}\n**Remind at :** ${formatwaktu}`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send({ embeds: [setEmbed] })

        setTimeout(async function () {
            message.channel.send(`Here is your reminder <@${message.author.id}>`)
            const reminderEmbed = new Discord.MessageEmbed()
            .setAuthor(nama, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Reminder :** ${reminder}`)
            .setColor("RANDOM")
            .setTimestamp()
            message.channel.send({ embeds: [reminderEmbed] })
        }, ms(time));
    },
};
