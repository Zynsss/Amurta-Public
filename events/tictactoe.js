const TicTacToe = require('discord-tictactoe');
const client = require('../index');

client.on('message', message => {
    const game = new TicTacToe({ language: 'en' })
    if (message.content.startsWith('.ttt') || message.content.startsWith('.tictactoe')) {
        game.handleMessage(message);
    }
});