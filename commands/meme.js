const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const Discord = require("discord.js");
const { Message, Client } = require("discord.js");

module.exports = {
    name: "meme",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        const url = await fetch("https://www.reddit.com/r/memes/random/.json");
        const random = await url.json();
        const embed = new Discord.MessageEmbed()
            .setTitle(`Random Meme | ${random[0].data.children[0].data.title}`)
            .setImage(random[0].data.children[0].data.url)
            .setColor("#FF00A6")
        message.channel.send({ embeds: [embed] })
    },
};
