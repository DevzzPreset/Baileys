const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("./lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`╔┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
╎Hai  ${pushname !== undefined ? pushname : 'Kak'}
╎Selamat ${ucapanWaktu}  
╠┈┈┈┈「 *USER INFO* 」┈┈┈┈┈✧
╎𖣘• 𝗡𝗮𝗺𝗲: ${pushname !== undefined ? pushname : '-'}
╎𖣘• 𝗦𝘁𝗮𝘁𝘂𝘀: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╎𖣘• 𝗟𝗶𝗺𝗶𝘁: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╎𖣘• 𝗟𝗶𝗺𝗶𝘁 𝗚𝗮𝗺𝗲 : ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
╎𖣘• 𝗕𝗮𝗹𝗮𝗻𝗰𝗲 : ${getBalance(sender, balance)}
╠┈┈┈┈「 *BOT INFO* 」┈┈┈┈┈✧
╎𖣘• 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : ${ownerName}
╎𖣘• 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botName}
╎𖣘• 𝗧𝗶𝗺𝗲 : ${jam}
╎𖣘• 𝗗𝗮𝘁𝗲 : ${tanggal(new Date())}
╎𖣘• 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
╠┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
╎  『 *HITUNG MUNDUR* 』
╎⭝ 𝐎𝐭𝐰 𝐇𝐚𝐫𝐢 𝐊𝐞𝐦𝐞𝐫𝐝𝐞𝐤𝐚𝐚𝐧🇲🇨
╎ ${lebaran}
╎⭝ 𝐎𝐭𝐰 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮🎇
╎ ${mundur}
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╔┈┈┈┈「 *RULES* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│•ぎ 𝘿𝙄𝙇𝘼𝙍𝘼𝙉𝙂 𝙈𝙀𝙉𝙀𝙇𝙁𝙊𝙉 𝙉𝙊𝙈𝙀𝙍 𝘽𝙊𝙏
╎│•ぎ 𝙅𝘼𝙉𝙂𝘼𝙉 𝙈𝙀𝙉𝙔𝘼𝙇𝘼𝙃𝙂𝙐𝙉𝘼𝙆𝘼𝙉 𝙁𝙄𝙏𝙐𝙍 𝘽𝙊𝙏
╎│•ぎ 𝙅𝙄𝙆𝘼 𝘽𝙊𝙏 𝙏𝙄𝘿𝘼𝙆 𝙈𝙀𝙍𝙀𝙎𝙋𝙊𝙉 
╎│    𝙆𝙀𝙈𝙐𝙉𝙂𝙆𝙄𝙉𝘼𝙉 𝘽𝙊𝙏 𝙎𝙀𝘿𝘼𝙉𝙂 𝙊𝙁𝙁
╎│    𝙐𝙇𝘼𝙉𝙂𝙄 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙅𝙄𝙆𝘼 𝘽𝙊𝙏 𝙊𝙉
╎│•ぎ 𝙅𝙄𝙆𝘼 𝙏𝙀𝙍𝙆𝙀𝙉𝘼 𝘽𝘼𝙉𝙉𝙀𝘿
╎│    𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍 𝙆𝙀𝙏𝙄𝙆 .𝙤𝙬𝙣𝙚𝙧
╎│•ぎ 𝙇𝙄𝙈𝙄𝙏 𝙃𝘼𝙍𝙄𝘼𝙉 20 𝙇𝙄𝙈𝙄𝙏 𝘼𝙆𝘼𝙉
╎│    𝘿𝙄𝙍𝙀𝙎𝙀𝙏 𝘿𝙄 𝙃𝘼𝙍𝙄 𝘽𝙀𝙍𝙄𝙆𝙐𝙏𝙉𝙔𝘼 
╎│    𝙅𝙄𝙆𝘼 𝙈𝘼𝙐 𝙇𝙄𝙈𝙄𝙏 𝙐𝙉𝙇𝙄𝙈𝙄𝙏𝙀𝘿 𝙃𝙐𝘽𝙐𝙉𝙂𝙄 𝙊𝙒𝙉𝙀𝙍 
╎╰─────────────────✧
╠┈┈┈┈「 *MAIN MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}simplemenu
╎│•ぎ ${prefix}infobot
╎│•ぎ ${prefix}donate
╎│•ぎ ${prefix}dashboard
╎│•ぎ ${prefix}owner
╎│•ぎ ${prefix}cekdrive
╎│•ぎ ${prefix}cekbandwidth
╎│•ぎ ${prefix}cekpremium
╎│•ぎ ${prefix}listpremium
╎│•ぎ ${prefix}listsewa
╎│•ぎ ${prefix}speed
╎│•ぎ ${prefix}runtime
╎│•ぎ ${prefix}listbahasa
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *CONVERTED MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}toanime
╎│•ぎ ${prefix}differentme
╎│•ぎ ${prefix}differentme2
╎│•ぎ ${prefix}diffusion
╎│•ぎ ${prefix}txt2img
╎│•ぎ ${prefix}aiscene
╎│•ぎ ${prefix}remini
╎│•ぎ ${prefix}hdr
╎│•ぎ ${prefix}nobg
╎│•ぎ ${prefix}removebg
╎│•ぎ ${prefix}resize
╎│•ぎ ${prefix}ssweb
╎│•ぎ ${prefix}ssweb2
╎│•ぎ ${prefix}sticker
╎│•ぎ ${prefix}stickerwm
╎│•ぎ ${prefix}smeme
╎│•ぎ ${prefix}toimg
╎│•ぎ ${prefix}tourl
╎│•ぎ ${prefix}tovideo
╎│•ぎ ${prefix}tomp3
╎│•ぎ ${prefix}toaudio
╎│•ぎ ${prefix}tovn
╎│•ぎ ${prefix}toptv
╎│•ぎ ${prefix}readvo
╎│•ぎ ${prefix}ttp
╎│•ぎ ${prefix}attp
╎│•ぎ ${prefix}qc
╎│•ぎ ${prefix}emojimix
╎│•ぎ ${prefix}ai
╎│•ぎ ${prefix}aiimg
╎│•ぎ ${prefix}aidraw
╎│•ぎ ${prefix}chatgpt
╎│•ぎ ${prefix}nuliskiri
╎│•ぎ ${prefix}nuliskanan
╎│•ぎ ${prefix}foliokiri
╎│•ぎ ${prefix}foliokanan
╎│•ぎ ${prefix}say
╎│•ぎ ${prefix}translate
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *VOICE CHANGER* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}bass
╎│•ぎ ${prefix}deep
╎│•ぎ ${prefix}fast
╎│•ぎ ${prefix}slow
╎│•ぎ ${prefix}smooth
╎│•ぎ ${prefix}fat
╎│•ぎ ${prefix}earrape
╎│•ぎ ${prefix}blown
╎│•ぎ ${prefix}nightcore
╎│•ぎ ${prefix}tupai
╎│•ぎ ${prefix}robot
╎│•ぎ ${prefix}reverse
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *ANONYMOUS MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}anonymouschat
╎│•ぎ ${prefix}start
╎│•ぎ ${prefix}next
╎│•ぎ ${prefix}stop
╎│•ぎ ${prefix}sendprofile
╎│•ぎ ${prefix}menfess
╎│•ぎ ${prefix}confess
╎│•ぎ ${prefix}balasmenfess
╎│•ぎ ${prefix}tolakmenfess
╎│•ぎ ${prefix}stopmenfess
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *STORE MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}list
╎│•ぎ ${prefix}addlist
╎│•ぎ ${prefix}dellist
╎│•ぎ ${prefix}update
╎│•ぎ ${prefix}jeda
╎│•ぎ ${prefix}tambah
╎│•ぎ ${prefix}kurang
╎│•ぎ ${prefix}kali
╎│•ぎ ${prefix}bagi
╎│•ぎ ${prefix}delsetdone
╎│•ぎ ${prefix}changedone
╎│•ぎ ${prefix}setdone
╎│•ぎ ${prefix}delsetproses
╎│•ぎ ${prefix}changeproses
╎│•ぎ ${prefix}setproses
╎│•ぎ proses < reply chat >
╎│•ぎ done < reply chat >
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *RPG MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}inventory
╎│•ぎ ${prefix}mining
╎│•ぎ ${prefix}buy
╎│•ぎ ${prefix}sell
╎│•ぎ ${prefix}heal
╎│•ぎ ${prefix}hunt
╎│•ぎ ${prefix}adventure
╎│•ぎ ${prefix}luckyday
╎│•ぎ ${prefix}killslime
╎│•ぎ ${prefix}killgoblin
╎│•ぎ ${prefix}killdevil
╎│•ぎ ${prefix}killbehemoth
╎│•ぎ ${prefix}killdemon
╎│•ぎ ${prefix}killdemonking
╎│•ぎ ${prefix}joinrpg
╎│•ぎ ${prefix}sellikan
╎│•ぎ ${prefix}sellbesi
╎│•ぎ ${prefix}sellemas
╎│•ぎ ${prefix}jelajah
╎│•ぎ ${prefix}mancing
╎│•ぎ ${prefix}jualikan
╎│•ぎ ${prefix}jualcoal
╎│•ぎ ${prefix}jualstone
╎│•ぎ ${prefix}jualingot
╎│•ぎ ${prefix}jualkayu
╎│•ぎ ${prefix}jualbahankimia
╎│•ぎ ${prefix}lebur
╎│•ぎ ${prefix}nebang
╎│•ぎ ${prefix}goplanet
╎│•ぎ ${prefix}ojek
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *GAME MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}caklontong
╎│•ぎ ${prefix}tebakgambar
╎│•ぎ ${prefix}tebakkata
╎│•ぎ ${prefix}tebakgame
╎│•ぎ ${prefix}tebakbendera
╎│•ぎ ${prefix}tebakkalimat
╎│•ぎ ${prefix}tebaksiapa
╎│•ぎ ${prefix}tebakkimia
╎│•ぎ ${prefix}tebaklirik
╎│•ぎ ${prefix}tebaktebakan
╎│•ぎ ${prefix}tekateki
╎│•ぎ ${prefix}susunkata
╎│•ぎ ${prefix}tictactoe
╎│•ぎ ${prefix}delttt
╎│•ぎ ${prefix}casino
╎│•ぎ ${prefix}delcasino
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *GROUP MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}autoaigc
╎│•ぎ ${prefix}afk
╎│•ぎ ${prefix}welcome
╎│•ぎ ${prefix}left
╎│•ぎ ${prefix}pppanjanggc
╎│•ぎ ${prefix}opentime
╎│•ぎ ${prefix}closetime
╎│•ぎ ${prefix}setopen
╎│•ぎ ${prefix}changesetopen
╎│•ぎ ${prefix}delsetopen
╎│•ぎ ${prefix}setclose
╎│•ぎ ${prefix}changesetclose
╎│•ぎ ${prefix}delsetclose
╎│•ぎ ${prefix}setwelcome
╎│•ぎ ${prefix}changewelcome
╎│•ぎ ${prefix}delsetwelcome
╎│•ぎ ${prefix}setleft
╎│•ぎ ${prefix}changeleft
╎│•ぎ ${prefix}delsetleft
╎│•ぎ ${prefix}linkgc
╎│•ぎ ${prefix}setppgc
╎│•ぎ ${prefix}setppgc2
╎│•ぎ ${prefix}setnamegc
╎│•ぎ ${prefix}setdesc
╎│•ぎ ${prefix}autodlgc
╎│•ぎ ${prefix}antilink
╎│•ぎ ${prefix}antilinktt
╎│•ぎ ${prefix}kickme
╎│•ぎ ${prefix}mute
╎│•ぎ ${prefix}open
╎│•ぎ ${prefix}close
╎│•ぎ ${prefix}add
╎│•ぎ ${prefix}kick
╎│•ぎ ${prefix}promote
╎│•ぎ ${prefix}demote
╎│•ぎ ${prefix}revoke
╎│•ぎ ${prefix}hidetag
╎│•ぎ ${prefix}checksewa
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *DOWNLOAD MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}play
╎│•ぎ ${prefix}ytmp3
╎│•ぎ ${prefix}ytmp4
╎│•ぎ ${prefix}ytv
╎│•ぎ ${prefix}ytv2
╎│•ぎ ${prefix}spotify
╎│•ぎ ${prefix}spotifydl
╎│•ぎ ${prefix}instagram
╎│•ぎ ${prefix}ig
╎│•ぎ ${prefix}ig2
╎│•ぎ ${prefix}ig3
╎│•ぎ ${prefix}igphoto
╎│•ぎ ${prefix}igvideo
╎│•ぎ ${prefix}igreels
╎│•ぎ ${prefix}twitter
╎│•ぎ ${prefix}tiktok
╎│•ぎ ${prefix}tiktokslide
╎│•ぎ ${prefix}tiktoksearch
╎│•ぎ ${prefix}tiktokaudio
╎│•ぎ ${prefix}mediafire
╎│•ぎ ${prefix}gitclone
╎│•ぎ ${prefix}fbdl
╎│•ぎ ${prefix}fb2
╎│•ぎ ${prefix}fb3
╎│•ぎ ${prefix}fb4
╎│•ぎ ${prefix}gdrive
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *SEARCH MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}spotifysearch
╎│•ぎ ${prefix}lk21
╎│•ぎ ${prefix}jarak
╎│•ぎ ${prefix}bukalapak
╎│•ぎ ${prefix}apk
╎│•ぎ ${prefix}google
╎│•ぎ ${prefix}ytsearch
╎│•ぎ ${prefix}grupwa
╎│•ぎ ${prefix}pinterest
╎│•ぎ ${prefix}lirik
╎│•ぎ ${prefix}infogempa
╎│•ぎ ${prefix}komikusearch
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *RANDOM ANIME* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}akira
╎│•ぎ ${prefix}akiyama
╎│•ぎ ${prefix}ana
╎│•ぎ ${prefix}asuna
╎│•ぎ ${prefix}ayuzawa
╎│•ぎ ${prefix}boruto
╎│•ぎ ${prefix}chitanda
╎│•ぎ ${prefix}deidara
╎│•ぎ ${prefix}elaina
╎│•ぎ ${prefix}emilia
╎│•ぎ ${prefix}erza
╎│•ぎ ${prefix}fanart
╎│•ぎ ${prefix}genshin
╎│•ぎ ${prefix}gremory
╎│•ぎ ${prefix}hestia
╎│•ぎ ${prefix}hinata
╎│•ぎ ${prefix}husbu
╎│•ぎ ${prefix}icon
╎│•ぎ ${prefix}inori
╎│•ぎ ${prefix}isuzu
╎│•ぎ ${prefix}itachi
╎│•ぎ ${prefix}itori
╎│•ぎ ${prefix}kaga
╎│•ぎ ${prefix}kagura
╎│•ぎ ${prefix}kaguya
╎│•ぎ ${prefix}kakasih
╎│•ぎ ${prefix}kaneki
╎│•ぎ ${prefix}kaori
╎│•ぎ ${prefix}keneki
╎│•ぎ ${prefix}kosaki
╎│•ぎ ${prefix}kotori
╎│•ぎ ${prefix}kuriyama
╎│•ぎ ${prefix}kuroha
╎│•ぎ ${prefix}kurumi
╎│•ぎ ${prefix}loli
╎│•ぎ ${prefix}madara
╎│•ぎ ${prefix}megumin
╎│•ぎ ${prefix}menus
╎│•ぎ ${prefix}mikasa
╎│•ぎ ${prefix}miku
╎│•ぎ ${prefix}minato
╎│•ぎ ${prefix}naruto
╎│•ぎ ${prefix}natsukawa
╎│•ぎ ${prefix}nezuko
╎│•ぎ ${prefix}nishimiya
╎│•ぎ ${prefix}onepiece
╎│•ぎ ${prefix}pokemon
╎│•ぎ ${prefix}rem
╎│•ぎ ${prefix}rize
╎│•ぎ ${prefix}sagiri
╎│•ぎ ${prefix}sakura
╎│•ぎ ${prefix}sasuke
╎│•ぎ ${prefix}shina
╎│•ぎ ${prefix}shinka
╎│•ぎ ${prefix}shizuka
╎│•ぎ ${prefix}shota
╎│•ぎ ${prefix}simp
╎│•ぎ ${prefix}tomori
╎│•ぎ ${prefix}toukachan
╎│•ぎ ${prefix}tsunade
╎│•ぎ ${prefix}yatogami
╎│•ぎ ${prefix}yuki
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *RANDOM MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}waifu
╎│•ぎ ${prefix}ppcp
╎│•ぎ ${prefix}cosplay
╎│•ぎ ${prefix}cecan
╎│•ぎ ${prefix}cogan
╎│•ぎ ${prefix}meme
╎│•ぎ ${prefix}memeindo
╎│•ぎ ${prefix}darkjokes
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *RANDOM QUOTES* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}quotesdilan
╎│•ぎ ${prefix}quotesbucin
╎│•ぎ ${prefix}quotesjawa
╎│•ぎ ${prefix}quotesanime
╎│•ぎ ${prefix}galau
╎│•ぎ ${prefix}podcast
╎│•ぎ ${prefix}sadpodcast
╎│•ぎ ${prefix}speak
╎│•ぎ ${prefix}aivoice
╎│•ぎ ${prefix}simivoice
╎│${petik}
╎╰─────────────────✧
╠┈┈┈┈「 *CEWEK ASIA MENU* 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│${petik}
╎│•ぎ ${prefix}lisa
╎│•ぎ ${prefix}rose
╎│•ぎ ${prefix}jiso
╎│•ぎ ${prefix}jenny
╎│•ぎ ${prefix}indonesia
╎│•ぎ ${prefix}japan
╎│•ぎ ${prefix}china
╎│•ぎ ${prefix}malaysia
╎│•ぎ ${prefix}vietnam
╎│•ぎ ${prefix}korea
╎│•ぎ ${prefix}thailand
╎│${petik}
╎╰─────────────────✧
