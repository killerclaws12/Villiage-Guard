const { MessageEmbed } = require("discord.js")

module.exports = {
    name : 'serverinfo',
  
    run(client, message, args) {
      //create an embed with information about the server and send it to the channel
      let embed = new MessageEmbed()
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL())
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Total Real Members**", message.guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField("**Total Bots**", message.guild.members.cache.filter(member => member.user.bot).size, true)
        .addField("**Total Channels**", message.guild.channels.cache.size, true)
        .addField("**Total Text Channels**", message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
        .addField("**Total Voice Channels**", message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
        .addField("**Created On**", message.guild.createdAt.toLocaleString(), true)
        .setDescription(`${message.guild.roles.cache.map(role => role.toString()).join(' ')}`)
        .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());
      
      message.channel.send(embed);
    }
  }