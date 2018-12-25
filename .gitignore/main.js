const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({game: { name: 'Je suis une biquette', type: 0}});
    console.log('Bot Ready !');
});

bot.login('NTI2NzQ0MTkxNzcwODIwNjI3.DwJpLA.rBU1djw5Aom7K-enk5CaUIy_Gc8');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("Commandes du bot !", " -/help : Affiche les commandes du bot!")
            .addField("Interaction", "ping : le bot répond pong !")
            .setFooter("C'est tout pour ce embed !")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes du bot  :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }

    
  if (message.content.startsWith (prefix + "biquette")) {
    number = 5;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["./images/" + imageNumber + ".jpg"]} )
}


});

bot.on('ready', () => {
    console.log('I am ready!');
  });
  
  // Create an event listener for messages
  bot.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '!pp') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });


