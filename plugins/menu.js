const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
const voice = {
    menu: 'media/AUD-20240904-WA0426.mp3'
}

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = ` *👋 Hello ${pushname}*
╭═══𝐁𝐋𝐀𝐂𝐊 𝐀𝐋𝐅𝐇𝐀 𝐕-1═══─●►
⚚╭─────────────┈
⚚│ Prefix : .
⚚│ User :.......
⚚│ Bot :𝙱𝙻𝙰𝙲𝙺 𝙰𝙻𝙵𝙷𝙰 𝚅-1
⚚│ Owner :PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒
⚚│ Version : v1
⚚│ Ram : 235 MB/480 MB
⚚╰─────────────┈
  
*👋 Hello 𝚞𝚜𝚎𝚛 𝚗𝚊𝚖𝚎....*

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

> ρσɯҽԃ Ⴆყ PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒

╰══════════════════─●►
`

await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`Error`)
}
})
