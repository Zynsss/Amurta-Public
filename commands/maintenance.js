const Discord = require('discord.js')
const { Database } = require('quickmongo');
require('dotenv').config();
const mongoDBURL = process.env.mongoDBURL
const db = new Database(mongoDBURL);
const fs = require('fs');
const { stringify } = require("querystring");

module.exports = {
    name: "maintenance",
    aliases: ['mt'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        await db.connect()
        if (!message.content.startsWith(prefix)) return
        if (message.author.id === "764456504660328468" || message.author.id === "520607541579743252") {
            
            const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
            const cmdmap = commandFiles.map(files => `${files.split(".")[0]}`)
            
            if (args[0] == 'on') {
                let MTFetch = await db.fetch(`MT_${message.guild.id}`)
                if (MTFetch == null) MTFetch = []
                await db.push(`MT_${message.guild.id}`, cmdmap)
                await db.pull(`MT_${message.guild.id}`, "maintenance")
                return message.channel.send("Successfully entered maintenance mode!")
            }

            else if (args[0] == 'off') {
                let MTFetch = await db.fetch(`MT_${message.guild.id}`)
                if (MTFetch == null) MTFetch = []
                await db.delete(`MT_${message.guild.id}`)
                return message.channel.send("Successfully exited maintenance mode")
            } else return message.channel.send('Please specify on/off')
        } else return message.channel.send("You cannot use this command")
    },
};
