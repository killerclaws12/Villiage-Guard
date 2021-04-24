const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name : 'play',
    run: async(client, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Hey buddy! Please join a voice channel.')

        const query = args.join(" ")
        if(!query) return message.reply('Please enter a song name bud!')

        await client.player.play(message, query)
    }
}