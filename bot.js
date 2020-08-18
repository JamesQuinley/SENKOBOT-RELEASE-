const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

//so this begins the code and the tribulations lol why am I writing this lol  (ITS A COMMENT)
//the text editor I use is based in the ubuntu terminal you may have heard of it, its named nano and it looks like the fbi would use it lol, its nice thought for a bash text editor
client.on('ready', () => {
  console.log(`Authed as ${client.user.tag}!`);
});
   
client.on('message', msg => {
  if (msg.content === 'bot_ready') {
    msg.reply('Alastor is awating your commands');
    msg.reply('HAHA, im your demon freind Alastor,sign and we can be *FREINDS* '); 
}
});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
client.on('message', msg => {
  if (msg.content === 'version') {
    msg.reply('This is version 1.10 of the Alastor bot by James Quinley, hosted on ubuntu 18.04.5 LTS with node.js ESTIMATED UPTIME 7:30 AM - 5:00 PM PST (set startup 7:25 AM PST shutdown 5:00 PM PST (updates may cause small down time if big bugs occur (c) James Quinley / The nerd_xp https://tenor.com/view/think-emoji-thonk-meme-gif-11987851');
  }
});
client.on('message', msg => {
  if (msg.content === 'marco') {
    msg.reply('polo!');
    msg.reply('put stale memes <here> https://tenor.com/view/think-emoji-thonk-meme-gif-11987851');
  }
});
client.on('message', msg => {
  if (msg.content === 'SPAM') {
    msg.reply('https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-15268759');
  }
});
client.on('message', msg => {
  if (msg.content === 'James Quinley') {
    msg.reply('All hail my awsome creator!!!  0_0 Still what am I, Do I even exist?');
  }
});
client.on('message', msg => {
  if (msg.content === 'lol') {
    msg.reply('Whats so Funny?');
  }
});
client.on('message', msg => {
  if (msg.content === '0_0') {
    msg.reply('??? 0_0 ???');
  }
});
client.on('message', msg => {
  if (msg.content === 'bot_status') {
    msg.reply('Senko_bot is online and Is hosted from James Quinleys server (ubuntu 18.04.5 LTS)');
  }
});
client.on('message', msg => {
  if (msg.content === 'kick') {
    msg.reply('Sorry I am not programed to kick members, lol sorry to dissapoint /shrug');
  }
});
client.on('message', msg => {
  if (msg.content === 'meme') {
   msg.reply('https://cdn.discordapp.com/attachments/742423809759379561/742555549027139724/danktank.webp');
    
  }
});
client.on('message', msg => {
  if (msg.content === 'space') {
    msg.reply('https://www.youtube.com/spacex');
  }
});
client.on('message', msg => {
  if (msg.content === '~grab') {
    msg.reply('STOP STEALING WALLETS 0_0 *just stop*');
  }
});

client.on('message', msg => {
  if (msg.content === 'COMMANDS') {
    msg.reply('meme,lol,marco,ping,0_0,kick,space,SPAM,version');
  }
});
client.on('message', msg => {
  if (msg.content === 'commands') {
    msg.reply('meme,lol,marco,ping,0_0,kick,space,SPAM,version');
  }
});
client.on('message', msg => {
  if (msg.content === 'wana play ping pong?') {
    msg.reply('no i dont 0_0');
  }
});

client.on('message', msg => {
  if (msg.content === 'Streamers go here') {
    msg.reply('join S.A. at discord.gg/y3u2SKK');
   }
});
client.on('message', msg => {
  if (msg.content === 'U cute') {
    msg.reply('https://tenor.com/view/pedro-monkey-puppet-meme-awkward-gif-15268759 no public signs of affection in the server lol and thats not allowed in hell');
  }
});
client.on('message', msg => {
  if (msg.content === 'I HACKING LOL') {
    msg.reply('no ur not lol ur just on crosh pinging google.com lol I made this bot in java script and ur stuck on bash lol get reckt');
  }
});

client.on('message', msg => {
  if (msg.content === 'my password is password') {
    msg.reply('hmm so you found the hidden comand, hmm *WHAT EVER SHAL I DO*, yeah congrats you found it, yay horray, now let me take my nap in peace');
  }
});
client.on('message', msg => {
  if (msg.content === 'rock') {
    msg.reply('This is a essay about how, wait give me a sec im pulling one of my school essays, ok how the rock should be presedent');
  }
});
client.on('message', msg => {
  if (msg.content === 'code') {
    msg.reply('So you would like the bot code, please Dm @The_nerd_xp if you share a server with him eg Streamer Alliance, 115 infected,or just email me at jsquinley@gmail.com');
    msg.reply('Thanks for your intrest in the bot, I will work on a github/fork of the source that I used FYI IT SHOULD BE UP SOOn');
  }
});
client.on('message', msg => {
  if (msg.content === 'meme1') {
    msg.reply(' https://tenor.com/view/coffin-meme-coffin-dance-meme-funny-lol-gif-16797420');
   
client.on('message', msg => {
  if (msg.content === 'meme3') {
    msg.reply('https://tenor.com/view/oi-what-do-you-think-youre-doing-oi-what-do-you-think-youre-doing-pepsi-man-coca-cola-gif-15094826');
    
  }
}); 
 }
});
client.on('message', msg => {
  if (msg.content === 'meme2') {
  msg.reply('https://cdn.discordapp.com/attachments/742423809759379561/742556911790194718/images_37.jpeg');
  }
});
client.login(auth.token);

client.once('ready', () => {
       console.log('BOT NOW IS STARTED, ENJOY! HOST_OS:UBUNTU_18.04.5_LTS');
});
//new code is pushed via ssh from windows 10  
//aka my laptop 
//ready the senko-san lol prep the battle bots, and get your butt of the coutch and do some coding lol 
//this is a bot based off of bot.js and discord-botkit
//I will now build my own code
//and make a cringe meme selector
//senko-san
 
