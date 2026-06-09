//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                                            //
//                                                             GAAJU-X𝐌𝐃 𝐁𝐎𝐓                                                                         //
//                                                                                                                                                            //
//                                                                  𝐕 : 1.0.0                                                                                 //
//                                                                                                                                                            //
//                                                                                                                                                            //
//                ██╗    ██╗ █████╗ ██╗     ██╗  ██╗   ██╗   ██╗ █████╗ ██╗   ██╗████████╗███████╗ ██████╗██╗  ██╗      ███╗   ███╗██████╗                    //
//                ██║    ██║██╔══██╗██║     ██║  ╚██╗ ██╔╝   ██║██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔════╝██║  ██║      ████╗ ████║██╔══██╗                   //
//                ██║ █╗ ██║███████║██║     ██║   ╚████╔╝    ██║███████║ ╚████╔╝    ██║   █████╗  ██║     ███████║█████╗██╔████╔██║██║  ██║                   //
//                ██║███╗██║██╔══██║██║     ██║    ╚██╔╝██   ██║██╔══██║  ╚██╔╝     ██║   ██╔══╝  ██║     ██╔══██║╚════╝██║╚██╔╝██║██║  ██║                   //
//                ╚███╔███╔╝██║  ██║███████╗███████╗██║ ╚█████╔╝██║  ██║   ██║      ██║   ███████╗╚██████╗██║  ██║      ██║ ╚═╝ ██║██████╔╝                   //
//                 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝      ╚═╝     ╚═╝╚═════╝                    //
//                                                                                                                                                            //
//                                                                 𝐂𝐎𝐏𝐘𝐑𝐈𝐆𝐇𝐓 2026                                                                            //
//                                                                                                                                                            //
//                                                                                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//* 
//  * project_name : GAAJU-XMD
//  * author : Xchristech
//  * youtube : https://www.youtube.com/Xchristech
//  * description : GAAJU-XMD ,A Multi-Device whatsapp user bot.
//*
//*
//re-upload? recode? copy code? give credit to wallyjaytech 2026:)
//Instagram: Xchristech
//Telegram: t.me/Official_ChrisGaaju
//GitHub: Xchristech2 
//WhatsApp: +2348069675806
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@Xchristech
//   * Created By Github: Xchristech2.
//   * Credit To Chris Gaaju 
//   * © 2026 GAAJU-XMD.
// ⛥┌┤
// */
require('dotenv').config();
const settings = {
  packname: 'XHRIS TECH',
  author: 'XHRIS TECH',
  botName: "XHRIS MD V2 LITE",
  botOwner: 'xʜʀɪs ᴛᴇᴄʜ',
  footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ xʜʀɪs ᴛᴇᴄʜ',
  timezone: 'Africa/Lagos',
  prefix: '.',
  // XHRIS owner by default — overridable per deployment via OWNER_NUMBER (no +, country code + number)
  ownerNumber: process.env.OWNER_NUMBER || '237694600007',
  // Default menu/bot picture — overridable via BOT_PIC
  botImage: process.env.BOT_PIC || 'https://api.xhrishost.site/uploads/xhris-md-v2.jpg',
  // Channel/newsletter JID kept as the GAAJU default — overridable via NEWSLETTER_JID
  newsletterJid: process.env.NEWSLETTER_JID || '120363406588763460@newsletter',
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20,
  storeWriteInterval: 10000,
  description: "XHRIS MD V2 LITE — Multi-Device WhatsApp bot, powered by XHRIS TECH",
  version: "1.0.0",
  updateZipUrl: "https://github.com/Xchristech2/GAAJU-XMD/archive/refs/heads/main.zip",
  removeBgApi: {
    enabled: true,
    apiKey: "dyrbNSNtMf1CE84he61DR7Wx", // Your remove.bg API key That's currently mine it expire anytime remember to put yours if expired just go to remove.bg site sign up and get your api key
    apiUrl: "https://api.remove.bg/v1.0/removebg"
  }
};

global.sessionid = process.env.SESSION_ID || "";
// Expose identity to the XHRIS HOST connector and shared helpers
global.prefix = settings.prefix;
global.ownerNumber = settings.ownerNumber;
global.botMode = settings.commandMode || 'public';
global.botImage = settings.botImage;
global.botPic = settings.botImage;
global.newsletterJid = settings.newsletterJid;
global.footer = settings.footer;
module.exports = settings;
