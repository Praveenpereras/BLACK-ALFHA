const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "📥",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `╭═══𝐁𝐋𝐀𝐂𝐊 𝐀𝐋𝐅𝐇𝐀 𝐕-1═══─●►
⚚╭─────────────┈
⚚│ Prefix : .
⚚│ User :.......
⚚│ Bot :𝙱𝙻𝙰𝙲𝙺 𝙰𝙻𝙵𝙷𝙰 𝚅-1
⚚│ Owner :PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒
⚚│ Version : v1
⚚│ Ram : 235 MB/480 MB
⚚╰─────────────┈
  
*👋 Hello ${pushname}*

*👨‍💻_BLACK ALFHA-V-1_MAIN_COMMAND_👨‍💻*

*_______🔎MAIN_COMMANDS💻_______*

> 🤖 Command - .alive

> 💫 බොට් ඔන්ලයින්ද බැලීම

> 🤖 Command - .menu

> 💫 බොට්ගෙ විධාන මෙනුව ලබා ගැනීම

> 🤖 command - .ping

> 👾බොට්ගෙ සිග්නල් පරික්ශාව

*🤖 Command - .owner*

*👾බොට්ගෙ Owner Info එක ලබා ගැනීම*

*🤖 Command - .repo*

> 👾බොට්ගෙ Github Link (Repo) එක ලබා ගැනීම

*_______🔎_DOWNLOAD_COMMANDS💻_______*

> 👨‍💻 Command - .song

> 👾 සිංදු බාගත කිරීම

> 👨‍💻 Command - .video

> 👾 වීඩියෝ බාගත කිරීම

>👨‍💻 Command - .video

> 👾 වීඩියෝ බාගත කිරීම

> 👨‍💻 command - .fb

> 👾 facebook විඩියෝ බාගත කිරීම

> 👨‍💻 command-.tt

> 👾 tik tok විඩියෝ බාගත කිරිම

> 👨‍💻 command - .mediafire 

> 👾 mediafire බාගත කිරිම

> 👨‍💻 command - .twitter

> 👾 twitter විඩියෝ බාගත කිරිම

>👨‍💻 command - .gdrive

> 👾 gdrive බාගත කිරිම

*_______🔎AI_CHAT_COMMAND💻_______*

>💬 Command - .ai

> 👑 AI විධානයකි

*_______🔎OWENER_COMMANDS💻_______*

> 🤖 Command - .restart

> 🚀 Bot restart කිරීමට

> ᴘᴏᴡᴇʀᴇᴅ_ʙʏ_ʙʟᴀᴄᴋ_ᴀʟꜰʜᴀ ᴠ-1

╰══════════════════─●►`

return await conn.sendMessage(from,{image: {url: https://i.ibb.co/YjdvYzc/file-Dk-CNr-FLShv-Gyty-Qux-Tr-N1x-Eo.webp},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(${e})
}
})
