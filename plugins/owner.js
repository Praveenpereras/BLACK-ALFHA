const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ............*
*⚡ɴᴜᴍʙᴇʀ* -: 94762779719
*⚡ʏᴏᴜᴛᴜʙᴇ -:* .................
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* ..............

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
