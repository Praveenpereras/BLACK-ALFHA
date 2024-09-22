const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg' },
    { key: 'ALIVE_MSG', value: '> 👋 Hello ${pushname}

> 💗 Nice to meet you

╭───────────────◎◎▷
► HI I'M ALOVE NOW👾
╰───────────────◎◎▷ 😈*\n\n> 🔖We welcome the new arrivals of the digital world_►

👻I'm PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒

 BLACK ALFHA Is Online Now 👊 \n\nMULTIDEVICE WHATSAPP BOT🤖

> ❯ Welcome" BLACK ALFHA "whats app bot you can download video songs and various videos through this bot. Shado md owner is  " PD 𝚖𝚘𝚍𝚣 ꪻ𝐏яανι𝚈αнꪶ🕊🍒 " It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This  technology is also related to AI.\n\n> Type To .menu Get Commands👾

🧬 My what's app bot gop

https://chat.whatsapp.com/LcYUwlY3p35E2pHKWKfaJb

🧬 My what's app status Hub gop

https://chat.whatsapp.com/L25dhRDgdo6240IesMbgpG

🧬 My what's app modz gop

https://chat.whatsapp.com/G8cos6PhZ0YEQmr50KbE2k\n\n.....\n\n*🔮MADE BY BLACK ALFHA🔮*
╰───────────────◎◎▷}, 
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
