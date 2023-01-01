const Discord = require("discord.js");
const ms = require("ms");
const moment = require('moment');
const math = require('mathjs');
const { arg } = require("mathjs");
const { Message, Client } = require("discord.js");

module.exports = {
    name: "resin",
    aliases: ['rs'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        let resinsekarang = args[0];
        if (!resinsekarang) return message.channel.send("How many your resin now stoopid?")
        let resinnanti = args.slice(1).join(' ');
        if (!resinnanti) return message.channel.send("How many resin that you want stoopid?")
        let resin = math.evaluate(`${(resinnanti - resinsekarang) * 8}`);
        const resinfinal = resin + "m"
        const waktu = Date.now();
        const nama = message.member.displayName;
        const waktuindo = moment(waktu).utcOffset(7);
        const resintime = ms(resinfinal)
        const waktunanti = moment(waktuindo).add(resintime, 'millisecond')
        const formatwaktu = moment(waktunanti).format("dddd, Do MMMM YYYY, h:mm:ss A")
        
        const setEmbed = new Discord.MessageEmbed()
        .setAuthor(nama, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Succesfully set your resin reminder\n**Total Resin that you want :** ${resinnanti}\n**Remind at :** ${formatwaktu}`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send({ embeds: [setEmbed] })

        setTimeout(async function () {
            message.channel.send(`Your resin already ${resinnanti} <@${message.author.id}>`)
        }, ms(resinfinal));
    },
};
