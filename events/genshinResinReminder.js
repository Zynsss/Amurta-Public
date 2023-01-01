const client = require('../index');
const cron = require("cron");

// Senin //
let genshin1 = new cron.CronJob('00 23 * * 0', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Talent Liyue <@764456504660328468> jangan lupa Check-In Hoyolab sama Parametric Transformer');
  });
  
  let rei1 = new cron.CronJob('00 05 * * 1', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei1.start();
  genshin1.start();
  
  // Selasa //
  let genshin2 = new cron.CronJob('00 23 * * 1', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Ruin Serpent <@764456504660328468> jangan lupa Check-In Hoyolab');
  });
  
  let rei2 = new cron.CronJob('00 05 * * 2', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei2.start();
  genshin2.start();
  
  // Rabu //
  let genshin3 = new cron.CronJob('00 23 * * 2', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Ruin Serpent <@764456504660328468> sama jangan lupa Check-In Hoyolab');
  });
  
  let rei3 = new cron.CronJob('00 05 * * 3', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei3.start();
  genshin3.start();
  
  // Kamis //
  let genshin4 = new cron.CronJob('00 23 * * 3', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Talent Liyue <@764456504660328468> sama jangan lupa Check-In Hoyolab');
  });
  
  let rei4 = new cron.CronJob('00 05 * * 4', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei4.start();
  genshin4.start();
  
  // Jumat
  let genshin5 = new cron.CronJob('00 23 * * 4', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Ruin Serpent <@764456504660328468> sama jangan lupa Check-In Hoyolab');
  });
  
  let rei5 = new cron.CronJob('00 05 * * 5', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei5.start();
  genshin5.start();
  
  // Sabtu //
  let genshin6 = new cron.CronJob('00 23 * * 5', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Ruin Serpent <@764456504660328468> sama jangan lupa Check-In Hoyolab');
  });
  
  let rei6 = new cron.CronJob('00 05 * * 6', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei6.start();
  genshin6.start();
  
  // Minggu //
  let genshin0 = new cron.CronJob('00 23 * * 6', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Resin hari ini : Talent Liyue Prosperity <@764456504660328468> sama jangan lupa Check-In Hoyolab');
  });
  let rei0 = new cron.CronJob('00 05 * * 0', () => {
    const guild = client.guilds.cache.get('867018203330904094');
    const channel = guild.channels.cache.get('923131762522091581');
    channel.send('Daily check Hoyolab <@520607541579743252>');
  });
  rei0.start();
  genshin0.start();