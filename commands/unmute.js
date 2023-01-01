const { Message, Client } = require("discord.js");

module.exports = {
    name: "unmute",
    aliases: ['unmt'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468" || message.author.id === "719384166046629890") {
            const target = message.mentions.users.first() || message.guild.members.cache.get(args[0])
            if (target) {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`U HAVE BEEN UNMUTED MY DEAR CHILD <@${memberTarget.user.id}>, NOW GET YO BUTT OVER HERE`);
            } else {
                message.channel.send('Cant find that member!');
            }
        } else return message.channel.send("You cannot use this command")
    },
};
