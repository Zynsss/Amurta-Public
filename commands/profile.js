// const { Message, Client } = require("discord.js");

// module.exports = {
//     name: "profile",
//     /**
//      *
//      * @param {Client} client
//      * @param {Message} message
//      * @param {String[]} args
//      */
//     run: async (client, message, args, prefix) => {
//         const characters = require('../database/characters.json');
//         const Discord = require('discord.js')
//         var mastermessage = '**Builds:**\n\n'
//         args = [args.join(" ")]
//         var link = args[0].toLowerCase()
//         var entry = characters[args[0]]
//         if (entry == undefined) {
//             message.channel.send(args[0] + " was not found!")
//             return;
//         }

//         for (each in entry) {
//             mastermessage += "**" + each + "**\n`Weapons`: " + entry[each][4].join(", ") + "\n`Set(s)`: " + entry[each][3].join(" `or` ") + "\n`Sands`: " + entry[each][0][0].join(", ") + "\n`Goblet`: " + entry[each][0][1].join(", ") + "\n`Circlet`: " + entry[each][0][2].join(", ") + "\n`Substats`: " + entry[each][1].join(", ") + "\n\n"
//         }

//         //Generate a link to the icon, because honeyimpacts image files have faulty names (Raiden Shogun is called shougun_face.png with an extra u)
//         switch (args[0]) {
//             case 'Anemo Traveler':
//                 link = "traveler_boy_anemo"
//                 break;
//             case 'Electro Traveler':
//                 link = "traveler_boy_elextro"
//                 break;
//             case 'Geo Traveler':
//                 link = "traveler_geo_geo"
//                 break;
//             case 'Raiden Shogun':
//                 link = "shougun"
//                 break;
//         }

//         const exampleEmbed = new Discord.MessageEmbed()
//             .setColor('#0099ff')
//             .setTitle(`Profile entry: ${args[0]}`)
//             .setURL('https://genshin.mihoyo.com/en')
//             .setAuthor('Artifact Rater 1.4', 'https://img.utdstc.com/icon/9a6/3d0/9a63d0817ee337a44e148854654a88fa144cfc6f2c31bc85f860f4a42c92019f:200', 'https://genshin-impact.fandom.com/wiki/Artifacts/Stats')
//             .setDescription(`Suggested builds by the Genshin Impact Helper team.`)
//             .setThumbnail('https://genshin.honeyhunterworld.com/img/char/' + link + '_face.png')
//             .setTimestamp()
//             .setFooter(`Last updated: 30th of July '21`);

//         message.channel.send({ embeds: [exampleEmbed] })
//         message.channel.send(mastermessage)

//     },
// };
