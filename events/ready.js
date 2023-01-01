const client = require("../index");

client.once('ready', () => {
    console.log(`Bot Status is updated!\n${client.user.tag} is up and ready to work!`);
    client.user.setActivity("all of ur problems", { type: "LISTENING" })
  });