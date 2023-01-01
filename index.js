const { Client, Collection } = require("discord.js");
require('console-stamp')(console, { format: ':date(yyyy/mm/dd HH:MM:ss.l)' });

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Slash, Command, and Event Handler //
client.commands = new Collection();
require("./handler")(client);

// Logging System Client //
const logs = require('discord-logs');
logs(client, {
  debug: true
});

const fs = require('fs');
const loadEvents = () => {
  return new Promise((resolve, reject) => {
      const events = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
      for (const file of events) {
          try {
              console.log(`-> Loaded event ${file.split('.')[0]}`);
          } catch (error) {
              reject(error);
          }
      };

      resolve();
  })
}

const loadCommands = () => {
  console.log(`-> loading commands ......`);
  return new Promise((resolve, reject) => {
      fs.readdir('./commands/', (err, files) => {
          console.log(`+-----------------------------+`);
          if (err)
              return console.log('Could not find any commands!');

          const jsFiles = files.filter(file => file.endsWith('.js'));

          if (jsFiles.length <= 0)
              return console.log('Could not find any commands!');

          for (const file of jsFiles) {
              try {
                  const command = require(`./commands/${file}`);
                  console.log(`| Loaded Command ${command.name}  \t|`);
              } catch (error) {
                  reject(error);
              }
          };
          console.log(`+-----------------------------+`);
          console.log('-- loading Commands finished --');

          resolve();
      });
  })
}

require('dotenv').config();
const token = process.env.discordID
Promise.all([loadEvents(), loadCommands()])
  .then(function () {
      console.log('\x1B[32m*** All loaded successfully ***\x1B[0m');
      client.login(token);
  });