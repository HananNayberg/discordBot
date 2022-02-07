const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTM0NTc3OTEzMzU1OTY4NTQy.YeyHgg.Gq0sWDGk1puNLkV_dR741oegNbA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "DIRECT_MESSAGES"
    ]
})

client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello Yoni")
    }
})

client.login(process.env.TOKEN)