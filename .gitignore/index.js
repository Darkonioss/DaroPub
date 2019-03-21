const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
      console.log("Quelqu'un a utilisé cette commande")
    }
    if (message.content === 'Hacked by Darkonioss'){
        message.send("Je suis un bot mtn @! /!\ElFamoso/!\#3581 ||Hacked||")
    }
    bot.on('message', message => {
        if(message.content.startsWith(prefix + 'mp')){
            message.delete()
          message.guild.members.forEach((player) => {
              message.guild.member(player).send(`ce que tu veux !`)
            
          });
        }
  })

bot.login('NDUyNDIxMjE0MDc0NDM3NjMy.D3Vs9Q.ppadBa_iO2c8bbk8jOxWoWPtI7M')
