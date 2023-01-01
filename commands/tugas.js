const { Message, Client } = require("discord.js");

module.exports = {
    name: "tugas",
    aliases: ['t'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, prefix) => {
        message.channel.send
( 
`
Kamis, 19 Mei 2022
1. Kimia
Kerjakan latihan PAT di Scola (deadline: 26 Mei)

Senin, 23 Mei 2022
1. Kimia
Menyelesaikan latihan di Scola (deadline Jumat ini).
2. Matematika
Membereskan latihan PAT 
3. Praktikum  Fisika
Membereskan praktikum (deadline hari ini jam 23:59).
4. PSP masing-masing

Selasa, 24 Mei 2022
1. OR
Menyelesaikan video bagi yang belum.
2. Sejarah Wajib
Mengerjakan latihan PAT (deadline Jumat, 27 Mei 2022 jam 18:15)`
)
    .then(message => {
        setTimeout(() => message.delete(), 20000)
    })
    .then(msg => {
        setTimeout(() => message.delete(), 10)
    });
    },
};
