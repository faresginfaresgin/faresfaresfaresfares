const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(':two_hearts: بسم اللة الرحمن الرحيم :two_hearts:','https://www.twitch.tv/TEST-Broadcast%27);
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.login('NTA2OTIwODA2MTU3MjU0Njc4.DrpKWA.rjs4S3z4R3MVSEeNvK2PHPBrZ68');


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(:hearts:منور السيرفر:hearts:
:crown:اسمك:crown: : ${member}  
أنت العضو رقم: : ${member.guild.memberCount}) 
}).catch(console.error)
})
const adminprefix = "^";
const devs = ['465485850432765963','465485850432765963'];
client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} تم تغيير بلاينق البوت إلى )
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'avatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(${argresult} : تم تغير صورة البوت);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(تم تغيير تويتش البوت إلى  ${argresult}`)
}
});
