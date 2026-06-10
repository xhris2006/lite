 const channelInfo = {
    'contextInfo': {
        'forwardingScore': 999, // Keeps the "High Forwarding" look
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
            // Your Channel Newsletter ID
            'newsletterJid': (global.newsletterJid || process.env.NEWSLETTER_JID || '120363406588763460@newsletter'),
            // Your Channel Bot Name
            'newsletterName': 'XHRIS MD V2 LITE',
            // Dummy ID (keeps the fake forward working)
            'serverMessageId': 100 
        }
    }
};

module.exports = {
    'channelInfo': channelInfo
};
