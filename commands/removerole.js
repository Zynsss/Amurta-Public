const { Message, Client } = require("discord.js");

module.exports = {
    name: "removerole",
    aliases: ['rr'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        if (message.author.id === "764456504660328468") {
            let user = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
            if (!user) return message.channel.send('User is missing!')

            let findrole = args.slice(1).join(' ');
            const role = message.guild.roles.cache.find(r => r.name.includes(findrole));

            if (!role) return message.channel.send('Could not find that role!')
            user.roles.remove(role.id);
            message.channel.send(findrole + ` role has been removed from ${user}`);
        } else return message.channel.send("You cannot use this command")
    },
};
