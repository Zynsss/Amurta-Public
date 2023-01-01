const { Message, Client } = require("discord.js");

module.exports = {
    name: "dailycheck",
    aliases: ['dc'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.reply(`https://forms.gle/Wr8uyDUHptSCfV9a7`)
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
