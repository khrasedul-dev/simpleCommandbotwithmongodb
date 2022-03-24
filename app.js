const mongoose = require('mongoose')
const {Telegraf , Composer} = require('micro-bot')

// const bot = new Telegraf('5239471949:AAFtksTOfeAQcJCg1C6VOhsnL6k6-PKdF1U')
const bot = new Composer()

mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.iznkc.mongodb.net/Deem_Airdrop',{useNewUrlParser:true,useUnifiedTopology:true}).catch((e)=>{
        console.log(e)
}).then((d)=>console.log('Database connected')).catch((e)=>console.log(e))

const Schema = mongoose.Schema;

const  sc = new Schema({
    pinksale: {
        type: String
    },
    timelunch: {
        type: String
    },
    launch: {
        type: String
    },
    Tokenomics: {
        type: String
    }
},{versionKey: false})

const dbModel = mongoose.model("data", sc );


bot.start((ctx)=>{
    ctx.reply('This private group bot')
})

bot.command('pinksale',ctx=>{

    dbModel.find().then((data)=>{
        ctx.reply(data[0].pinksale || 'Message set not yet')
    }).catch((e)=>console.log(e))

})
bot.command('timelunch',ctx=>{

    dbModel.find().then((data)=>{
        ctx.reply(data[0].timelunch || 'Message set not yet')
    }).catch((e)=>console.log(e))

})
bot.command('launch',ctx=>{

    dbModel.find().then((data)=>{
        ctx.reply(data[0].launch || 'Message set not yet')
    }).catch((e)=>console.log(e))

})
bot.command('Tokenomics',ctx=>{

    dbModel.find().then((data)=>{
        ctx.reply(data[0].Tokenomics || 'Message set not yet')
    }).catch((e)=>console.log(e))

})

bot.command('addpinksale',ctx=>{

    let input = ctx.update.message.text
    input = input.replace('/addpinksale','')

    dbModel.find().then((data)=>{
        
        const id = data[0]._id

        dbModel.updateOne({_id: id}, {pinksale: input}).then(()=>{
            ctx.reply("Update command message")
        }).catch((e)=>console.log(e))
        
    }).catch((e)=>console.log(e))

})


bot.command('addtimelunch',ctx=>{

    let input = ctx.update.message.text
    input = input.replace('/addtimelunch','')

    dbModel.find().then((data)=>{
        
        const id = data[0]._id

        dbModel.updateOne({_id: id}, {timelunch: input}).then(()=>{
            ctx.reply("Update command message")
        }).catch((e)=>console.log(e))
        
    }).catch((e)=>console.log(e))

})


bot.command('addlaunch',ctx=>{

    let input = ctx.update.message.text
    input = input.replace('/addlaunch','')

    dbModel.find().then((data)=>{
        
        const id = data[0]._id

        dbModel.updateOne({_id: id}, {launch: input}).then(()=>{
            ctx.reply("Update command message")
        }).catch((e)=>console.log(e))
        
    }).catch((e)=>console.log(e))

})

bot.command('addTokenomics',ctx=>{

    let input = ctx.update.message.text
    input = input.replace('/addTokenomics','')

    dbModel.find().then((data)=>{
        
        const id = data[0]._id

        dbModel.updateOne({_id: id}, {Tokenomics: input}).then(()=>{
            ctx.reply("Update command message")
        }).catch((e)=>console.log(e))
        
    }).catch((e)=>console.log(e))

})





// bot.launch().then(()=>console.log('bot started')).catch((e)=>console.log(e))
module.exports = bot
