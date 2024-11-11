const Discord = require("discord.js-selfbot-v13") // npm i discord.js-selfbot-v13 (required)
const client = new Discord.Client({checkUpdate: false})
const sphinx = require("sphinx-self");
const keep_alive = require("./keep_alive.js");

new sphinx.Core(client).leveling({ channel: "1287716743166562316", randomLetters: true, type: 'ar', time: 10000 }) //hover for options

client.login(process.env.TOKEN) //Not saved.
