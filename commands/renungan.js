const { Message, Client } = require("discord.js");

module.exports = {
    name: "renungan",
    aliases: ['rn'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.reply("https://discord.com/channels/867018203330904094/941486773194862612/1014499564566347886")
            .then(message => {
                setTimeout(() => message.delete(), 20000)
            })
            .then(msg => {
                setTimeout(() => message.delete(), 10)
            });
    },
};
