const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['pg'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send('pinging').then(m => {
            m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms\n**Node:** node1.fluidnodes.com:2022\n**Address:** 132.145.22.118:25615`);
        })
    },
};
