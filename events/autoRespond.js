const client = require('../index');
const { arg } = require("mathjs");

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === "gn") {
      message.reply("Night! Sweet dreams! 🌙")
    }
    else if (message.content.toLowerCase() === "ba") {
      message.reply("banana")
    }
    else if (message.content.toLowerCase() === "pagi") {
      message.reply("siang sore malam")
    }
    else if (message.content.toLowerCase() === "morning") {
      message.reply("morning! ☀️")
    }
    else if (message.content.toLowerCase() === "siang") {
      message.reply("Siang apanya")
    }
    else if (message.content.toLowerCase() === "good morning") {
      message.reply("Morning to you too, hope you had a good sleep")
    }
    else if (message.content.toLowerCase() === "ajaja") {
      message.reply("ayaya")
    }
    else if (message.content.toLowerCase() === "ohayou" ||
      message.content.toLowerCase() === "ohayo") {
      message.reply("https://media.discordapp.net/attachments/941486773194862612/941533767447740466/tes1.png")
    }
  });

  client.on('messageCreate', (message) => {
    if (message.author.id === "764456504660328468" || message.author.id === ("842381411473293312")) return;
    if (message.content.toLowerCase() === "y") {
      message.reply("https://media.discordapp.net/attachments/941486773194862612/941531109106282496/Screenshot_20211228-145926_Chrome.png")
    }
  })

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    
    const p = require('../sibuk.json')
    let confirm = false;
    var i;
    for (i = 0; i < p.length; i++) {
  
      const kata = '.*\\b' + p[i] + '\\b.*'
  
      if (message.content.toLowerCase().match(kata.toLowerCase()))
        confirm = true;
    }
  
    if (confirm) {
      message.reply("Si paling sibuk :sweat_smile::point_up:")
    }
  })

  client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    
    const p = require('../sibuk.json')
    let confirm = false;
    var i;
    for (i = 0; i < p.length; i++) {
  
      const kata = '.*\\b' + p[i] + '\\b.*'
  
      if (newMessage.content.toLowerCase().match(kata.toLowerCase()))
        confirm = true;
    }
  
    if (confirm) {
      newMessage.reply("Si paling sibuk :sweat_smile::point_up:")
    }
  })