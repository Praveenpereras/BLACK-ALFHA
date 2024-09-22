const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "📜",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `╭═══𝐁𝐋𝐀𝐂𝐊 𝐀𝐋𝐅𝐇𝐀 𝐕-1═══─●►
⚚╭─────────────┈
⚚│ Prefix : .
⚚│ User :${pushname}
⚚│ Bot :𝙱𝙻𝙰𝙲𝙺 𝙰𝙻𝙵𝙷𝙰 𝚅-1
⚚│ Owner :PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒
⚚│ Version : v1
⚚│ Ram : 235 MB/480 MB
⚚╰─────────────┈
╭═══════════════════─●►
*👋 Hello ${pushname}*

*⫷⃝☬DOWNLOAD COMMANDS⫸⃝☬*

${menu.download}

*⫷⃝☬MAIN COMMANDS⫸⃝☬*

${menu.main}

*⫷⃝☬GROUP COMMANDS⫸⃝☬*

${menu.group}

*⫷⃝☬OWNER COMMANDS⫸⃝☬*

${menu.owner}

*⫷⃝☬CONVERT COMMANDS⫸⃝☬*

${menu.convert}

*⫷⃝☬SEARCH COMMANDS⫸⃝☬*

${menu.search}

> ʝσιɳ ιɳ ɱყ ɯԋαƚʂαρρ ɠɾσυρ●►
...............

> ρσɯҽԃ Ⴆყ PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒

╰══════════════════─●►`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
