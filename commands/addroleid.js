const { Message, Client } = require("discord.js");

module.exports = {
    name: "addroleid",
    aliases: ['arid'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468") {
            let user = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
            if (!user) return message.channel.send('User is missing!')
            let findrole = args.slice(1).join(' ');
            const role = message.guild.roles.cache.find(r => r.id.includes(findrole));

            if (!role) return message.channel.send('Could not find that role!')
            await user.roles.add(role)
            message.channel.send(`${user} now has the ` + findrole + " role!");
        } else return message.channel.send("You cannot use this command")
    },
};
