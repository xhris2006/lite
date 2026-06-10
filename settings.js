// XHRIS MD V2 LITE — WhatsApp Bot
// © 2026 XHRIS TECH
require('dotenv').config();
const settings = {
  packname: 'XHRIS MD V2 LITE',
  author: 'XHRIS TECH',
  botName: 'XHRIS MD V2 LITE',
  botOwner: 'XHRIS',
  footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ xʜʀɪs ᴛᴇᴄʜ',
  timezone: 'Africa/Douala',
  prefix: '.',
  ownerNumber: process.env.OWNER_NUMBER || '237694600007',
  botImage: process.env.BOT_PIC || 'https://api.xhrishost.site/uploads/xhris-md-v2.jpg',
  newsletterJid: process.env.NEWSLETTER_JID || '120363406588763460@newsletter',
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20,
  storeWriteInterval: 10000,
  description: "XHRIS MD V2 LITE - Multi-Device WhatsApp Bot",
  version: "2.0.0",
  updateZipUrl: "https://github.com/xhris2006/lite/archive/refs/heads/main.zip",
  removeBgApi: {
    enabled: true,
    apiKey: "dyrbNSNtMf1CE84he61DR7Wx",
    apiUrl: "https://api.remove.bg/v1.0/removebg"
  }
};

global.sessionid = process.env.SESSION_ID || "";
// Identity exposed to the XHRIS HOST connector and shared helpers
global.prefix = settings.prefix;
global.ownerNumber = settings.ownerNumber;
global.botMode = settings.commandMode || 'public';
global.botImage = settings.botImage;
global.botPic = settings.botImage;
global.newsletterJid = settings.newsletterJid;
global.footer = settings.footer;
module.exports = settings;
