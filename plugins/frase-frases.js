/*---------------------------------------------------------------------------------------
  ๐ โข By https://github.com/ALBERTO9883
  ๐ โข โAlberto Y Ashlyโ
-----------------------------------------------------------------------------------------*/

import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
try {    
    
if (command == 'consejo') {
let res = await fetch("https://api.zahwazein.xyz/randomtext/motivasi?apikey=${global.keysxxx}")
let json = await res.json()
let frase = json.result.message
let frase1 = await translate(frase, { to: 'es', autoCorrect: true })
await m.reply(`*โโโโโโโโโโโโโโโโโโ*\n*โ โง  ${frase1.text}*\n*โโโโโโโโโโโโโโโโโโ*`)}

if (command == 'fraseromantica') {
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
let frase1 = await translate(frase, { to: 'es', autoCorrect: true }).catch(_ => null)
m.reply(`*โญโโโโโโโโโโโโโโโโโฎ*\n*โฅ  ${frase1.text}*\n*โฐโโโโโโโโโโโโโโโโโฏ*`)}

if (command == 'historiaromantica') {
let res = await fetch("https://api-xcoders.site/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
let storytime = await translate(story, { to: 'es', autoCorrect: true }).catch(_ => null)
let titletime = await translate(title, { to: 'es', autoCorrect: true }).catch(_ => null)
conn.reply(m.chat, `แญฅ๐ซแญข Tรญtulo: ${titletime.text}
แญฅ๐แญข Autor: ${author_name}
โโโโโโโโโโโโโโโโ
${storytime.text}`, m)}
    
} catch {    
await m.reply(`*[โ] ๐พ๐ฒ๐๐๐๐ธ๐พ ๐๐ฝ ๐ด๐๐๐พ๐, ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด๐ผ๐ด๐ฝ๐๐ด ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐ (๐ฐ๐ฟ๐ธ) ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ด๐๐๐ด ๐ฒ๐ฐ๐ธ๐ณ๐ฐ ๐๐ด๐ผ๐ฟ๐พ๐๐ฐ๐ป๐ผ๐ด๐ฝ๐๐ด, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*`)    
}}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica']
export default handler
