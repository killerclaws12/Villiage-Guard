const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'stop',
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Hey buddy! Please join a voice channel.')

    client.player.stop(message)
    }
}