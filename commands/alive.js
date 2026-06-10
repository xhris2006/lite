const settings = require("../settings");
const os = require("os");

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

async function aliveCommand(sock, chatId, message) {
  try {
    const uptime = formatUptime(process.uptime());
    const text =
      `*${settings.botName}*\n\n` +
      `Status : Online\n` +
      `Uptime : ${uptime}\n` +
      `Version : ${settings.version}\n\n` +
      `Type *${settings.prefix}menu* for the full command list.`;
    await sock.sendMessage(chatId, {
      text,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: (global.newsletterJid || '120363406588763460@newsletter'),
          newsletterName: settings.botName,
          serverMessageId: -1
        }
      }
    }, { quoted: message });
  } catch (error) {
    console.error('Error in alive command:', error);
    await sock.sendMessage(chatId, { text: 'Bot is alive and running.' }, { quoted: message });
  }
}
module.exports = aliveCommand;
