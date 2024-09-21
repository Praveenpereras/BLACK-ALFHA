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

let dec = `╭───────────────◎◎▷
*👋 Hello ${pushname}*
❦ ｓｔａｔｕｓⱽᴵᴱᵂˢ 🥺🤍

⭕ɴᴀᴍᴇ -  PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒
⭕Nik Name - BLACK ALPHA
⭕age - 18 🧸✨
⭕ꜰʀᴏᴍ - Benthara💕🐼
⭕ɴɪᴄᴇ ᴛᴏ ᴍᴇᴇᴛ ʏᴏᴜ ❤‍🩹😇
_              BOY_🙈👀

කෙල්ලො කොල්ලො ඔක්කම මැසේජ් එකක් දාගෙන යන් 🤭🤍
*🚫 මෙය මගුල් "නැටීමට නොව මාසෙට දාන පැකේජ් එක ට සාදාරනයක් කිරීම පිනිසයි🐼💕

`https://wa.me/+94762777919??text=_ʜɪ•|°_හායි🙈🌸_ස්ටේටස්🪄බලන්න_කන්ටැක්🥰සේව්_දාගන්න_INBOX🤭ආවෙ♡``

♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
ˡᶦᵏᵉ     ᶜᵒᵐᵐᵉⁿᵗ     ˢᵃᵛᵉ     ˢʰᵃʳᵉ*~
⛦☻••ඔයාගේ නම මොකක්ද...?_~*
⛦☻••ඔයාගේ ගම කොහෙද...?
⛦☻••ඔයාගේ වයස කීයද...?`
╰───────────────◎◎▷
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/p22J5nQ/file-1nh1gowb-Fqjz1-YJGzgo8u1e-J.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
