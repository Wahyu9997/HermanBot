let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [089516809533]
┣➥ *Dana:* [089516809533]
┣➥ *Gopay:* [089516809533]
┣➥ *Ovo:* [089516809533]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6289526350998*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
