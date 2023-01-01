const client = require("../index");
require('dotenv').config();
const mongoDBURL = process.env.mongoDBURL
const { Database } = require('quickmongo');
const db = new Database(mongoDBURL);
const moment = require('moment');
const config = require('../config.json')
const prefix = config.prefix
const color = { white: '\x1B[0m', grey: '\x1B[2m' };
db.connect()

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (await db.has(`afk1-${message.author.id}+${message.guild.id}`) || await db.has(`afk2-${message.author.id}+${message.guild.id}`) || await db.has(`afk3-${message.author.id}+${message.guild.id}`)) {
    await db.delete(`afk1-${message.author.id}+${message.guild.id}`)
    await db.delete(`afk2-${message.author.id}+${message.guild.id}`)
    try {
      const namaawal = await db.get(`afk3-${message.author.id}+${message.guild.id}`)
      await message.member.setNickname(namaawal)
    } catch (err) {
      message.channel.send("Error when reset nickname")
    }
    await db.delete(`afk3-${message.author.id}+${message.guild.id}`)
    message.reply(`Welcome back <@${message.author.id}>, I removed your AFK`)
  }
  if (message.mentions.members.first()) {
    const nama = "`" + await db.get(`afk3-${message.mentions.members.first().id}+${message.guild.id}`) + "`";
    const timestamp = await db.get(`afk2-${message.mentions.members.first().id}+${message.guild.id}`);
    const timeAgo = moment(timestamp).fromNow();
    if (await db.has(`afk1-${message.mentions.members.first().id}+${message.guild.id}`)) {
      message.channel.send(nama + " is " + await db.get(`afk1-${message.mentions.members.first().id}+${message.guild.id}`) + ` (${timeAgo})`)
    } else return;
  } else;

  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return
    if (command) {
      let commandFetch = await db.fetch(`commandToggle_${message.guild.id}`)
      if (commandFetch == null) commandFetch = []
      if (commandFetch.includes(command.name)) return message.channel.send("This command is disabled")
      let MTFetch = await db.fetch(`MT_${message.guild.id}`)
      if (MTFetch == null) MTFetch = []
      if (MTFetch.includes(command.name)) return message.channel.send("The bot is currently on maintenance mode")
      console.log(`(${color.grey}${message.guild.name}${color.white}) ${message.author.username} : ${message.content}`);
      await command.run(client, message, args, prefix)
    }
  }

});
