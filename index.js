require("dotenv").config();
const { Telegraf } = require("telegraf")

const { message } = require("telegraf/filters")

const bot = new Telegraf(process.env.TOKEN_BOT);

bot.on(message("text"), async (ctx) => {
    console.log(ctx.message.text);
})

bot.launch();

console.log('Bot is running...');