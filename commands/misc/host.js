const Discord = require('discord.js')
const os = require('os')
module.exports = {
    name : 'host',

    run(client, message, args) {
    var os = require('os');
    
    let embed = new Discord.MessageEmbed()
        .setTimestamp()
        .addField(`:bust_in_silhouette: Number of users`, `${client.users.cache.size}`, true)  
        .addField(`:speech_balloon:  Number of channel(s)`, `${client.channels.cache.size}`, true)
        .addField(`:desktop: Operating system`, `${os.platform()}`, true)
        .addField(`:gear: Architecture`, `${os.arch()}`, true)
        .addField(`:rocket:  Processor`, `${os.cpus().map(i => `${i.model}`)[0]}`, true)
        .addField(`:pager: RAM`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`, true)
        .addField(`:alarm_clock: Logged in since`, ""+(Math.round(client.uptime / (1000 * 60 * 60))) + " Hour(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) and" + (Math.round(client.uptime / 1000) % 60) + " second(s)"+"")
        .addField(`:dividers: Lib`, `Discord.js ${Discord.version}`, true)

    message.channel.send(embed);
}
}