const client = require('../index');
const cron = require("cron");

let dailycheck = new cron.CronJob('00 08,09,10 * * 0-4', () => {
    const nama = require('../tag.json')
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('941486773194862612');
    channel.send("https://cdn.discordapp.com/attachments/941486599571652638/1019916469317935174/unknown.png")
    channel.send(`ISI DAILY CHECK!\nhttps://docs.google.com/forms/d/e/1FAIpQLScA1NVzuxMn9E_jRRq3O_wsk06bsVzPDo_9j1dvltHAU4SF5A/viewform\n${nama}`);
  });
  dailycheck.start();