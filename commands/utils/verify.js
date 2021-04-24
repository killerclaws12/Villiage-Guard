
const Discord = require('discord.js')

module.exports = {
    name : 'verify',

  async run(client, message, args) {
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require the manage roles permission.')

    const roles = message.guild.roles.cache.get('811654728756887603')

    await message.member.roles.add(roles.id).catch(err => console.log(err))
    message.delete()
  }
}