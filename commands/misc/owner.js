const { MessageEmbed, Discord } = require('discord.js');
module.exports = {
    name : 'owner',
  
    run(client, message, args) {
      //create an embed with some info about the bot creator and send it to the channel
      const embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Creator")
        .addField('Bot owner:', 'Mr.Claws#1111')
        .setFooter(`© ${message.guild.me.displayName}`, client.user.displayAvatarURL());
  
      message.channel.send(embed);
    }
  }