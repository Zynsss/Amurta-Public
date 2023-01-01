const client = require('../index');
const words = require('../BlacklistedWord.json');
const { arg } = require("mathjs");

client.on('messageCreate', (message) => {
  if (message.author.bot) return;
  if (message.author.id === "764456504660328468" || message.author.id === ("842381411473293312")) return;

  let confirm = false;
  var i;
  for (i = 0; i < words.length; i++) {

    const badWords = '.*\\b' + words[i] + '\\b.*'

    if (message.content.toLowerCase().match(badWords.toLowerCase()) || message.content.toLowerCase().match('imel') && message.channel.id === '941486773194862612')
      confirm = true;
  }

  if (confirm) {
    message.reply("https://media.discordapp.net/attachments/941486773194862612/941531109106282496/Screenshot_20211228-145926_Chrome.png")
  }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  if (newMessage.author.id === "764456504660328468" || newMessage.author.id === ("842381411473293312")) return;

  let confirm = false;
  var i;
  for (i = 0; i < words.length; i++) {

    const badWords = '.*\\b' + words[i] + '\\b.*'
    if (newMessage.content.toLowerCase().match(badWords.toLowerCase()) || newMessage.content.toLowerCase().match('imel') && newMessage.channel.id === '941486773194862612')
      confirm = true;
  }
  if (confirm) {
    newMessage.reply("https://media.discordapp.net/attachments/941486773194862612/941531109106282496/Screenshot_20211228-145926_Chrome.png")
  }
})