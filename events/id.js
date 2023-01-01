const client = require('../index');

client.on('message', async (message) => {
    if (!message.content.startsWith(".id")) return;
    if (message.author.bot) return;
    if (message.author.id === "764456504660328468") {
      const orang = message.mentions.members.first();
      if (orang) {
        const id = orang.id
        message.channel.send(id)
      } else return message.channel.send('Cant find that member')
    } else return message.channel.send("You cannot use this command")
  })