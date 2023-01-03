const TelegramApi = require('node-telegram-bot-api')

const TOKEN = '5756123628:AAHvqZVo2U-KVvWtfZOeCy8JPDtR6Sgwzt0';

const bot = new TelegramApi(TOKEN, {polling: true})


bot.setMyCommands([
  {command: '/start', description: "Начальное приветствие"},
  {command: '/info', description: "Инфа"},
])


bot.on('message', msg => {
  console.log(msg)
})