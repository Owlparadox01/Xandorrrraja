const { getMainKeyboard } = require('../utils/keyboard');

/**
 * Handle /start command
 */
async function handleStart(bot, msg) {
    const chatId = msg.chat.id;
    const safeName = (msg.from.first_name || 'User').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const welcomeCaption = `
👋 <b>Selamat Datang, ${safeName}!</b>

🤖 <b>Web2Apk Pro Bot Gen 3</b> adalah solusi instant mengubah website menjadi aplikasi Android.

✨ <i>Fitur Premium:</i>
• Tanpa Iklan
• Proses Cepat
• Custom Icon Support

👇 <b>Mulai project Anda sekarang:</b>
    `.trim();

    // Kirim foto dengan caption dan menu
    await bot.sendPhoto(chatId, 'https://files.catbox.moe/pj1dvf.jpg', {
        caption: welcomeCaption,
        parse_mode: 'HTML',
        reply_markup: getMainKeyboard()
    }).catch(async () => {
        // Fallback jika gagal kirim foto
        await bot.sendMessage(chatId, welcomeCaption, {
            parse_mode: 'HTML',
            reply_markup: getMainKeyboard()
        });
    });
}

module.exports = { handleStart };
