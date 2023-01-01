const { Message, Client } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("List of all my commands")
            .addField(".absen | .a", "Link absensi renungan setiap pagi hari")
            .addField(".afk | .afk", "Set an AFK status in this server")
            .addField(".calculator | .c", "You already know what is calculator, don't you?")
            .addField(".dailycheck | .dc", "Link Daily Check")
            .addField(".jadwal | .j", "Jadwal kelas 11A/C minggu ini")
            .addField(".ping | .pg", "Show the bot's average latency and API latency")
            .addField(".poll | .p", "Ini poll, bukan buat judi")
            .addField(".remind | .r", "Bisa nyuruh Mang Segul ngingetin kamu")
            .addField('.scola | .s', 'Link Scola')
            .addField(".tictactoe | .ttt", "Playing tic tac toe with the AI or with your friend")
            .addField(".tugas | .t", "List tugas minggu ini")
            .addField(".weekly | .w", "Weekly plan kelas 10A minggu ini")
            .addField(".zoom | .z", "Link Zoom PJJ")
            .setColor("RANDOM")
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp()
        message.channel.send({ embeds: [embed] })
    },
};
