const { Message, Client } = require("discord.js");

module.exports = {
    name: "scola",
    aliases: ['s'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.reply('https://smathibpk.scola.id/')
      .then(message => {
        setTimeout(() => message.delete(), 20000)
      })
      .then(msg => {
        setTimeout(() => message.delete(), 10)
      });
    },
};
