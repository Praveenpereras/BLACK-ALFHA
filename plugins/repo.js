const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
*📍REPO LINK ❤️‍🔥👇*

🤖◦https://github.com/Praveenpereras/BLACK-ALFHA-V-1.git

*📍PLEASE JOIN MY WHATSAPP GROUP❤️‍🔥👇*

🤖◦ https://chat.whatsapp.com/LcYUwlY3p35E2pHKWKfaJb

*BLACK ALFHA OWENERッ*`
  
await conn.sendMessage(from,{image:{url: `https://unitedcamps.in/Images/file_406.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
