const client = require('../index');
const Discord = require('discord.js');
const ms = require('ms');
const { isBuffer } = require('util');

module.exports = {
    name: "mute",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468" || message.author.id === "719384166046629890") {
            if(args[0] === '764456504660328468') return message.channel.send("HOW DARE YOU MUTE HIM! YOU CHOSE THE WRONG PERSON")
            let target = message.mentions.users.first() || message.guild.members.cache.get(args[0])
            if (target)  {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
                let memberTarget = message.guild.members.cache.get(target.id)

                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`HAHA, U HAVE BEEN MUTED <@${memberTarget.user.id}>. GO OUTSIDE AND TOUCH THE GRASS`);
                    return
                }
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`HAHA, U HAVE BEEN MUTED <@${memberTarget.user.id}> FOR ${ms(ms(args[1]))}. GO OUTSIDE AND TOUCH THE GRASS`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    message.channel.send(`U HAVE BEEN UNMUTED MY DEAR CHILD <@${memberTarget.user.id}>, NOW GET YO BUTT OVER HERE`)
                }, ms(args[1]));
            } else {
                message.channel.send('Cant find that member!');
            }
        } else return message.channel.send("You cannot use this command")
    },
};
