const { Message, Client } = require("discord.js");

module.exports = {
    name: "jadwal",
    aliases: ['j'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        // 11A
        if (message.member.roles.cache.some(role => role.id === '1001051312294744114')) {
            message.channel.send("https://media.discordapp.net/attachments/867050907032354857/1000215197425881128/unknown.png")
                .then(message => {
                    setTimeout(() => message.delete(), 20000)
                })
                .then(msg => {
                    setTimeout(() => message.delete(), 10)
                })
        }

        // 11C
        else if (message.member.roles.cache.some(role => role.id === '1001051320490397747')) {
            message.channel.send('https://media.discordapp.net/attachments/867050907032354857/1000064585656713216/Untitled77_20220722223849.png?width=1651&height=564')
                .then(message => {
                    setTimeout(() => message.delete(), 20000)
                })
                .then(msg => {
                    setTimeout(() => message.delete(), 10)
                })
        }
    },
};
