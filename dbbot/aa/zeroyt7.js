
owner = '628976388612'
botname = 'ARI BOT'
denarakey = 'Ari'
ownername = 'ARI'
zerokey = 'cf986e139a11690077304d29'

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, sleep, success, close } = require('./lib/functions')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbbUploader = require("imgbb-uploader");
const os = require('os');
const brainly = require('brainly-scraper');
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')


//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const _ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _prem = JSON.parse(fs.readFileSync('./database/prem.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let tebakkabupaten = JSON.parse(fs.readFileSync('./database/tebakkabupaten.json'))
let tebakkalimat = JSON.parse(fs.readFileSync('./database/tebakkalimat.json'))
let tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
let tebakkimia = JSON.parse(fs.readFileSync('./database/tebakkimia.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let tekateki = JSON.parse(fs.readFileSync('./database/tekateki.json'))
let tebaklogika = JSON.parse(fs.readFileSync('./database/tebaklogika.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = zeroyt7.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `62895333016753@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await zeroyt7.chats.all()
		const groupMetadata = isGroup ? await zeroyt7.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? zeroyt7.user.jid : zeroyt7.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? zeroyt7.user.name : conts.notify || conts.vname || conts.name || '-'
        const isBanned = _ban.includes(sender)
		const isPrem = _prem.includes(sender)
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		const arg = budy.slice(command.length + 2, budy.length)
		
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses Tod...!',
			success: 'Bot Ari',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		faketeks = 'Ari Bot'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            zeroyt7.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? zeroyt7.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./zeroyt7/zerothumb.jpg')
        const costum = (pesan, tipe, target, target2) => {
			zeroyt7.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            zeroyt7.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await zeroyt7.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            zeroyt7.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
                contexInfo: adyt
            })
        }
        (function(_0x2ca6e6,_0x5bc8fb){const _0x4084a5=_0x2ca6e6();function _0x11b8c1(_0x3a5899,_0x3438c6){return _0x14a5(_0x3438c6- -0x3d8,_0x3a5899);}while(!![]){try{const _0xd9301a=parseInt(_0x11b8c1(-0x26a,-0x264))/0x1*(-parseInt(_0x11b8c1(-0x26d,-0x267))/0x2)+parseInt(_0x11b8c1(-0x26f,-0x273))/0x3+-parseInt(_0x11b8c1(-0x26a,-0x271))/0x4*(parseInt(_0x11b8c1(-0x26d,-0x269))/0x5)+-parseInt(_0x11b8c1(-0x266,-0x266))/0x6*(parseInt(_0x11b8c1(-0x260,-0x268))/0x7)+parseInt(_0x11b8c1(-0x267,-0x26a))/0x8*(parseInt(_0x11b8c1(-0x26d,-0x265))/0x9)+-parseInt(_0x11b8c1(-0x270,-0x270))/0xa+parseInt(_0x11b8c1(-0x272,-0x26d))/0xb*(parseInt(_0x11b8c1(-0x268,-0x26e))/0xc);if(_0xd9301a===_0x5bc8fb)break;else _0x4084a5['push'](_0x4084a5['shift']());}catch(_0x1427ff){_0x4084a5['push'](_0x4084a5['shift']());}}}(_0x2e7b,0x24e23));const sendButVideo=async(_0x40f15b,_0x1d9c9b,_0x2f2402,_0x5f4e6e,_0xe76a32,_0xe617ff)=>{jadinya=await zeroyt7[_0x3f0efe(0x31d,0x322)](_0x40f15b,_0x5f4e6e,video),buttonMessagesV={'videoMessage':jadinya[_0x3f0efe(0x324,0x322)]['videoMessage'],'contentText':_0x1d9c9b,'footerText':_0x2f2402,'buttons':_0xe76a32,'headerType':0x5};function _0x3f0efe(_0x496cca,_0x9ed82b){return _0x14a5(_0x496cca-0x1b7,_0x9ed82b);}zeroyt7[_0x3f0efe(0x323,0x328)](_0x40f15b,buttonMessagesV,buttonsMessage,{'quoted':ftrol});},sendList=async(_0x2a1f3e,_0x3748bc,_0x5e04cc,_0x21c17f,_0xf98293)=>{function _0x3f9979(_0x33a1ee,_0x36fa46){return _0x14a5(_0x36fa46- -0x334,_0x33a1ee);}button={'buttonText':_0x3748bc,'description':_0x5e04cc,'sections':_0x21c17f,'listType':0x1},zeroyt7[_0x3f9979(-0x1ce,-0x1c8)](_0x2a1f3e,button,listMessage,{'quoted':ftrol});};function _0x14a5(_0x470700,_0x5890a0){const _0x2e7b89=_0x2e7b();return _0x14a5=function(_0x14a5bf,_0x22c3a7){_0x14a5bf=_0x14a5bf-0x165;let _0x13bca4=_0x2e7b89[_0x14a5bf];return _0x13bca4;},_0x14a5(_0x470700,_0x5890a0);}function hi(){function _0x1c1129(_0x1cb5b2,_0x9ffab5){return _0x14a5(_0x1cb5b2-0xeb,_0x9ffab5);}console[_0x1c1129(0x254,0x24d)]('Hello\x20World!');}hi();function _0x2e7b(){const _0x4fe116=['6yGIOCZ','81EFQHsO','149PewFpN','655608rulnmj','prepareMessage','4768zTJZZK','2519040FHIWiO','log','48IGxVuS','712305jkvXYz','sendMessage','message','121696qYxOdF','40ewhMhO','389417uUBkfV','1964PxTKtP'];_0x2e7b=function(){return _0x4fe116;};return _0x2e7b();}
        //sendButLoc(id/from, "string", "string", image, but, mek)
         function _0x49e8(){const _0x2abf1f=['128458zaqRph','15LuvETp','32FoIOpf','By\x20:\x20Prassz','307917pLgBPR','Zerobot~Prassz','127514DLEruK','2301110zFGGkR','11iUrhyl','5IBSTLg','sendMessage','2099160NwtLDQ','672988HpVyoZ','1059558OLmAKI'];_0x49e8=function(){return _0x2abf1f;};return _0x49e8();}(function(_0x4b5fea,_0xcd96a7){const _0xd54c3c=_0x9a06,_0x555513=_0x4b5fea();while(!![]){try{const _0x4e06eb=parseInt(_0xd54c3c(0x12b))/0x1+parseInt(_0xd54c3c(0x123))/0x2*(parseInt(_0xd54c3c(0x12c))/0x3)+-parseInt(_0xd54c3c(0x129))/0x4*(parseInt(_0xd54c3c(0x126))/0x5)+-parseInt(_0xd54c3c(0x12a))/0x6+-parseInt(_0xd54c3c(0x128))/0x7+parseInt(_0xd54c3c(0x12d))/0x8*(parseInt(_0xd54c3c(0x12f))/0x9)+-parseInt(_0xd54c3c(0x124))/0xa*(-parseInt(_0xd54c3c(0x125))/0xb);if(_0x4e06eb===_0xcd96a7)break;else _0x555513['push'](_0x555513['shift']());}catch(_0x5da84c){_0x555513['push'](_0x555513['shift']());}}}(_0x49e8,0x2960e));function _0x9a06(_0x41e8cb,_0x44ab09){const _0x49e8d9=_0x49e8();return _0x9a06=function(_0x9a063c,_0x40f3e3){_0x9a063c=_0x9a063c-0x123;let _0x55b451=_0x49e8d9[_0x9a063c];return _0x55b451;},_0x9a06(_0x41e8cb,_0x44ab09);}const sendButLoc=async(_0x151338,_0x56cd7c,_0x33ce1f,_0xbff411,_0x1ecc85,_0x40a38d)=>{const _0xf018e3=_0x9a06;return buttonMessagesL={'contentText':_0x56cd7c,'footerText':_0x33ce1f,'buttons':_0x1ecc85,'headerType':0x6,'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0xf018e3(0x130),'address':_0xf018e3(0x12e),'jpegThumbnail':_0xbff411}},zeroyt7[_0xf018e3(0x127)](_0x151338,buttonMessagesL,buttonsMessage,{'quoted':_0x40a38d});};
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/-IOQ074Tq-E", 
"thumbnail": fs.readFileSync('./zeroyt7/zero.jpg')
}




//━━━━━━━━━━━━━━━[ opsi ban ]━━━━━━━━━━━━━━━━━//



//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        zeroyt7.chatRead(from, "read")
        const fakegroup = (teks) => {
            zeroyt7.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./zeroyt7/zero.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                           
                            status: 1,
                            surface : 1,
                            message: `ARI BOT`, 
                            orderTitle: `ARI BOT`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zeroyt7.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zeroyt7.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
zeroyt7.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zeroyt7.groupRemove(from, [sender])
}     


//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))



 const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      zeroyt7.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: ftrol }
      );
    };






const uptime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};



for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}


//━━━━━━━━━━━━━━━[ SERVER GAME ]━━━━━━━━━━━━━━━━━//


 if (caklontong.hasOwnProperty(sender.split('@')[1]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* \n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }

if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 SUSUN KATA  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }



  if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }

if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
			
if (siapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = siapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Siapa Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete siapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/siapaaku.json", JSON.stringify(siapaaku))
                }
            }	


if (tebaklogika.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklogika[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Logika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaklogika[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklogika.json", JSON.stringify(tebaklogika))
                }
            }	


			
			if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
			
			if (tebakkabupaten.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkabupaten[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Kabupaten  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkabupaten[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkabupaten.json", JSON.stringify(tebakkabupaten))
                }
            }
			
			if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Kalimat 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkalimat[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                }
            }
			
			if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                }
            }
			
			if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakkimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak kimia  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebakkimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
                }
            }
			
			if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
			
			if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Tebakan  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
                }
            }
			
			if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Teka Teki  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Tumben jago wwkwkwkwkwkwk*`)
                    delete tekateki[sender.split('@')[0]]
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                }
            }
			
//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//


switch (command) {
	case 'menu':
	case 'help':
teks = `Hai ${pushname} 👋
Saya ${botname} Whatsapp yang membantu mempermudahkan sesuatu seperti membuat stiker dan lainnya, butuh info dariku ?`
img = fs.readFileSync('./zeroyt7/zero.jpg')
trans = `Note : kalau kamu wa lama atau mod, dan button ga keliatan, langsung aja ketik .allmenu`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '♚ MENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '❁ OWNER' }, type: 1 }
        ]
        sendButImage(from, teks, trans, img, but)
break
	case 'allmenu':
				menunya = `✮Group Menu✮
	✎ ${prefix}antilink
	✎ ${prefix}welcome
	✎ ${prefix}antivirtex
	✎ ${prefix}group
	✎ ${prefix}linkgrup
	✎ ${prefix}promote
	✎ ${prefix}demote
	✎ ${prefix}add
	✎ ${prefix}kick
	✎ ${prefix}setpp
	✎ ${prefix}setdesc
	✎ ${prefix}setname
	✎ ${prefix}hidetag
	
	✮Sticker Menu✮
	✎ ${prefix}attp
	✎ ${prefix}attp1
        ✎ ${prefix}ttp
	✎ ${prefix}sticker
	✎ ${prefix}tomp3
	✎ ${prefix}tovideo
	
	✮Downloader Menu✮
	✎ ${prefix}ytsearch
	✎ ${prefix}ytmp3
	✎ ${prefix}ytmp4
	✎ ${prefix}tiktok
	✎ ${prefix}pinterest
	✎ ${prefix}ig
	✎ ${prefix}joox
	
	✮Islami Menu✮
	✎ ${prefix}alquran
	✎ ${prefix}asmaulhusna
	✎ ${prefix}alquranaudio
	✎ ${prefix}jadwalsholat
	✎ ${prefix}kisahnabi
	✎ ${prefix}listsurah

	
	✮Information Menu✮
	✎ ${prefix}kbbi
	✎ ${prefix}infogempa
	✎ ${prefix}jadwaltv
	✎ ${prefix}translate
	✎ ${prefix}cuaca
	✎ ${prefix}wikipedia
	✎ ${prefix}lirik

	
	✮Random Text Menu✮
	✎ ${prefix}quotes
	✎ ${prefix}quotesanime
	✎ ${prefix}quotesdilan
	✎ ${prefix}quotesimage
	✎ ${prefix}katabijak
	✎ ${prefix}randomnama
	✎ ${prefix}faktaunik
	✎ ${prefix}pantun
	✎ ${prefix}puisi
	✎ ${prefix}quoteislami
	✎ ${prefix}quotesbucin
	✎ ${prefix}katasenja
    ✎ ${prefix}pantunpakboy
	✎ ${prefix}bikinquotes
	
	
	✮Game Menu✮
	✎ ${prefix}caklontong
	✎ ${prefix}tebakgambar
	✎ ${prefix}asahotak
	✎ ${prefix}siapaaku
	✎ ${prefix}tebaklogika
	✎ ${prefix}susunkata
	✎ ${prefix}tebakbendera
	✎ ${prefix}tebakkabupaten
	✎ ${prefix}tebakkalimat
	✎ ${prefix}tebakkata
	✎ ${prefix}tebakkimia
	✎ ${prefix}tebaklirik
	✎ ${prefix}tebaktebakan
	✎ ${prefix}tekateki
	
	
	
	
	✮Search Menu✮
	✎ ${prefix}wallpapersearch
	✎ ${prefix}playstore
	✎ ${prefix}shopee
	✎ ${prefix}google
	
	✮Primbon Menu✮
	✎ ${prefix}haribaik
	✎ ${prefix}artinama
	✎ ${prefix}jodoh
	✎ ${prefix}jadian
	✎ ${prefix}harilarangan
	✎ ${prefix}artimimpi
	
	✮Cek Fun Menu✮

	✎ ${prefix}hobi
	✎ ${prefix}ganteng
	✎ ${prefix}cantik
	✎ ${prefix}apakah
	✎ ${prefix}kapankah
	✎ ${prefix}bisakah
	✎ ${prefix}sifat
	✎ ${prefix}asal
	✎ ${prefix}beban
	✎ ${prefix}cekjadian
	
	
	✮Stalk Menu✮
	✎ ${prefix}stalkig
	✎ ${prefix}stalkgithub
	✎ ${prefix}stalktiktok
	
	✮Random Image Fun Menu✮
	✎ ${prefix}memeindo
	✎ ${prefix}memeindo1
	✎ ${prefix}darkjokes
	✎ ${prefix}darkjokes1
	✎ ${prefix}darkjokes2
	✎ ${prefix}jokesreceh
	
	✮Creator Image Menu✮
	✎ ${prefix}naruto
	✎ ${prefix}harrypoter
	✎ ${prefix}neon
	✎ ${prefix}chrome
	✎ ${prefix}smoke
	✎ ${prefix}love
	✎ ${prefix}blackpink
	✎ ${prefix}joker
	✎ ${prefix}transformer
        ✎ ${prefix}hartatahta
	
	
        Other Menu
       ✅  ${prefix}texttovoice

	✮Owner Menu✮
	✎ ${prefix}owner
	✎ ${prefix}bc
	✎ ${prefix}ban reply / +6294794456
	✎ ${prefix}unban reply / +6294794456
	✎ ${prefix}jamsekarang
	
	Note : Fitur Masih Dikit Karena Baru Jadi
	Next Update Bakal Di Tambahin bisa req fitur ke wa.me/${owner}
	
`
	zeroyt7.sendMessage(from, menunya, text, {quoted: ftrol})
                  break
				  
				  case 'hiddenmenu':
				  menunya = `✮Group Menu✮
	✎ ${prefix}antilink
	✎ ${prefix}welcome
	✎ ${prefix}antivirtex
	✎ ${prefix}group
	✎ ${prefix}linkgrup
	✎ ${prefix}promote
	✎ ${prefix}demote
	✎ ${prefix}add
	✎ ${prefix}kick
	✎ ${prefix}setpp
	✎ ${prefix}setdesc
	✎ ${prefix}setname
	✎ ${prefix}hidetag
	
	✮Anime Menu✮
	✎ ${prefix}character
	✎ ${prefix}manga
	✎ ${prefix}anime
	✎ ${prefix}kusonimesearch
	✎ ${prefix}otakudesusearch
	✎ ${prefix}nhentaisearch
	✎ ${prefix}nekopoisearch
	
	✮Sticker Menu✮
	✎ ${prefix}attp
	✎ ${prefix}attp1
        ✎ ${prefix}ttp
	✎ ${prefix}sticker
	✎ ${prefix}tomp3
	✎ ${prefix}tovideo
	
	✮Downloader Menu✮
	✎ ${prefix}ytsearch
	✎ ${prefix}ytmp3
	✎ ${prefix}ytmp4
	✎ ${prefix}tiktok
	✎ ${prefix}pinterest
	✎ ${prefix}ig
	✎ ${prefix}joox
	
	✮Islami Menu✮
	✎ ${prefix}alquran
	✎ ${prefix}asmaulhusna
	✎ ${prefix}alquranaudio
	✎ ${prefix}jadwalsholat
	✎ ${prefix}kisahnabi
	✎ ${prefix}listsurah

	
	✮Information Menu✮
	✎ ${prefix}kbbi
	✎ ${prefix}infogempa
	✎ ${prefix}jadwaltv
	✎ ${prefix}translate
	✎ ${prefix}cuaca
	✎ ${prefix}wikipedia
	
	✮Random Text Menu✮
	✎ ${prefix}quotes
	✎ ${prefix}quotesanime
	✎ ${prefix}quotesdilan
	✎ ${prefix}quotesimage
	✎ ${prefix}katabijak
	✎ ${prefix}randomnama
	✎ ${prefix}faktaunik
	✎ ${prefix}pantun
	✎ ${prefix}puisi
	✎ ${prefix}quoteislami
	✎ ${prefix}quotesbucin
	✎ ${prefix}katasenja
    ✎ ${prefix}pantunpakboy
	✎ ${prefix}bikinquotes

	
	✮Game Menu✮
	✎ ${prefix}caklontong
	✎ ${prefix}tebakgambar
	✎ ${prefix}asahotak
	✎ ${prefix}siapaaku
	✎ ${prefix}tebaklogika
	✎ ${prefix}susunkata
	✎ ${prefix}tebakbendera
	✎ ${prefix}tebakkabupaten
	✎ ${prefix}tebakkalimat
	✎ ${prefix}tebakkata
	✎ ${prefix}tebakkimia
	✎ ${prefix}tebaklirik
	✎ ${prefix}tebaktebakan
	✎ ${prefix}tekateki
	
	
	
	
	✮Search Menu✮
	✎ ${prefix}gimage
	✎ ${prefix}wallpapersearch
	✎ ${prefix}playstore
	✎ ${prefix}shopee
	✎ ${prefix}google
    ✎ ${prefix}lirik


	✮Primbon Menu✮
	✎ ${prefix}haribaik
	✎ ${prefix}artinama
	✎ ${prefix}jodoh
	✎ ${prefix}jadian
	✎ ${prefix}harilarangan
	✎ ${prefix}artimimpi
	
	
	✮Asupan Menu 18+✮
	✎ ${prefix}ghea
	✎ ${prefix}santuy
	✎ ${prefix}bocil
	✎ ${prefix}ukhty
	✎ ${prefix}cecan
	✎ ${prefix}hijab
	✎ ${prefix}geayubi
	
	
	✮Random Image NSFW 18+ Menu✮

	✎ ${prefix}ass
	✎ ${prefix}ahegao
	✎ ${prefix}bdsm
	✎ ${prefix}blowjob
	✎ ${prefix}cuckold
	✎ ${prefix}cum
	✎ ${prefix}ero
	✎ ${prefix}femdom
	✎ ${prefix}foot
	✎ ${prefix}gangbang
	✎ ${prefix}glasses
	✎ ${prefix}hentai
	✎ ${prefix}hentaigif
	✎ ${prefix}jahy
	✎ ${prefix}masturbation
	✎ ${prefix}nsfwNeko
	✎ ${prefix}orgy
	✎ ${prefix}panties
	✎ ${prefix}thighs
	✎ ${prefix}yuri
	✎ ${prefix}pussy
	
	✮Random Image SFW 18+ Menu✮
	
	✎ ${prefix}waifu
	✎ ${prefix}neko
	✎ ${prefix}shinobu
	✎ ${prefix}megumin
	✎ ${prefix}bully
	✎ ${prefix}cuddle
	✎ ${prefix}cry
	✎ ${prefix}kiss
	✎ ${prefix}hug
	✎ ${prefix}awoo
	✎ ${prefix}lick
	
	
	✮ 18+ ⛔⛔⛔
	
	✎ ${prefix}xvidiossearch
	✎ ${prefix}xvidios
    ✎ ${prefix}cersex
	


	RESIKO DI TANGGUNG LU SENDIRI
	
	✮Cek Fun Menu✮

	✎ ${prefix}hobi
	✎ ${prefix}ganteng
	✎ ${prefix}cantik
	✎ ${prefix}sange
	✎ ${prefix}lesbi
	✎ ${prefix}homo
	✎ ${prefix}apakah
	✎ ${prefix}kapankah
	✎ ${prefix}bisakah
	✎ ${prefix}sifat
	✎ ${prefix}asal
    ✎ ${prefix}beban
	✎ ${prefix}cekmati
	✎ ${prefix}cekjadian

	
	✮Stalk Menu✮
	✎ ${prefix}stalkig
	✎ ${prefix}stalkgithub
	✎ ${prefix}stalktiktok
	
	✮Random Image Fun Menu✮
	✎ ${prefix}memeindo
	✎ ${prefix}memeindo1
	✎ ${prefix}darkjokes
	✎ ${prefix}darkjokes1
	✎ ${prefix}darkjokes2
	✎ ${prefix}jokesreceh
	
	✮Creator Image Menu✮
	✎ ${prefix}naruto
	✎ ${prefix}harrypoter
	✎ ${prefix}neon
	✎ ${prefix}chrome
	✎ ${prefix}smoke
	✎ ${prefix}love
	✎ ${prefix}blackpink
	✎ ${prefix}joker
	✎ ${prefix}transformer
	
	
	✮Owner Menu✮
	✎ ${prefix}owner
	✎ ${prefix}bc
	✎ ${prefix}ban reply / +6294794456
	✎ ${prefix}unban reply / +6294794456
	

	
	
	Note : Fitur Masih Dikit Karena Baru Jadi
	Next Update Bakal Di Tambahin bisa req fitur ke wa.me/${owner}
	
	Untuk bisa akses fitur hidden menu bisa req ke owner bot ${owner} untuk bisa akses Trims
` 
zeroyt7.sendMessage(from, menunya, text, {quoted: ftrol})
                  break	  
				  
				  
				  
	
//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//








case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
zeroyt7.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await zeroyt7.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
zeroyt7.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
zeroyt7.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
zeroyt7.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zeroyt7.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}

break
 case 'add1':
  try {
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner && !zeroyt7.key.fromMe) return reply(mess.only.admin)           
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (zeroyt7.message.extendedTextMessage === null || zeroyt7.message.extendedTextMessage === undefined) {
  entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  response = await await zeroyt7.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
} else {
  entah = zeroyt7.message.extendedTextMessage.contextInfo.participant
 response = await await zeroyt7.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
}
} catch {
return 
}




break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
zeroyt7.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateSubject(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zeroyt7.groupUpdateDescription(from, `${body.slice(9)}`)
zeroyt7.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zeroyt7.downloadAndSaveMediaMessage(mek, './database/media_user')
await zeroyt7.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await zeroyt7.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
zeroyt7.sendMessage(from, options, text)
break


//━━━━━━━━━━━━━━━[ FITUR Image Creator ]━━━━━━━━━━━━━━━━━//




case 'naruto':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
query = args.join(" ")
get_audio = await getBuffer(`https://api.zeks.me/api/naruto?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&text=${query}`)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })


break
case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !ftrol.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(ftrol).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  zeroyt7.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					zeroyt7.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ftrol})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
case 'triggered1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (!isQuotedImage) return reply(' reply Gambarnya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage('https://janbot-api.herokuapp.com/api/imgedit/triger?url=${encmedia}')
await zeroyt7.sendMessage(from, media, image, { quotes: ftrol })
break


case 'joker':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await fetchJson(`https://janbot-api.herokuapp.com/api/textpro/jokerlogo?text=${ini_link}`)
get_audio = await getBuffer(get_audio.result)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break


case 'harrypoter':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/harry?text=${ini_link}&apikey=Ikyy69`)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break
case 'blackpink':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/ephoto/blackpink?text=${ini_link}&apikey=apiakuari`)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break
case 'transformer':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/textpro/transformer?text=${ini_link}&apikey=apiakuari`)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break

case 'neon':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/neon?text=${ini_link}&apikey=Ikyy69`)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break

case 'chrome':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${ini_link}&apikey=Ikyy69`)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break

case 'smoke':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await getBuffer(`https://zenzapi.xyz/api/photooxy/smoke?text=${ini_link}&apikey=apiakuari`)
ini_buffer = await getBuffer(get_audio)
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break

case 'love':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Mau kasi nama apa?\nContoh: ${prefix + command} rama`)
ini_link = args.join(" ")
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api/photooxy/double-heart?text=${ini_link}&apikey=Ikyy69`)
get_audio = get_audio.result
await zeroyt7.sendMessage(from, get_audio, image, { quotes: ftrol })
break


//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zeroyt7.sendMessage(from, buffer, sticker, { quoted: ftrol })
break

case 'attp':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
query = args.join(" ")
result = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${query}`)
buffer = await getBuffer(result.image)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol })
break
case 'ttp':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
query = args.join(" ")
buffer = await getBuffer(`https://h4ck3rs404-api.herokuapp.com/api/ttp?text=${query}&apikey=404Api`)
zeroyt7.sendMessage(from, buffer, image, { quoted: ftrol })
break







case 'sticker':
case 'stiker':

 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await zeroyt7.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                zeroyt7.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await zeroyt7.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            zeroyt7.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break    



case 'toimg':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Ari Bot`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
zeroyt7.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zeroyt7.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
zeroyt7.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await zeroyt7.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
zeroyt7.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Ari Bot' })
fs.unlinkSync(ran)
})
break

//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//


case 'listsurah':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/listsurah.json`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
iki = (`untuk cari surah pilih beberapa server berikut ini contoh penggunaan  ${prefix + command}1 nomor \n\n${prefix + command}1 1 \n${prefix + command}2 1 \n\n List nomor surah bisa ketik ${prefix}listsurah`)
reply(iki)
break

case 'alquran1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18  untuk list id surah ketik ${prefix}listsurah`)
urls = `https://equran.id/api/surat/${args[0]}`
quran = await fetchJson(urls)
ayat = quran.ayat
but = [
{ buttonId: `${prefix + command} ${quran.surat_selanjutnya.nomor}`, buttonText: { displayText: 'NEXT' }, type: 1 }
]
ini_txt = `QS. ${quran.nama_latin} : 1-${quran.jumlah_ayat}\nArti Surah :${quran.arti}\nTurun Surah :${quran.tempat_turun}\n\n`
for (var x of ayat) {
arab = x.ar
nomor = x.nomor
latin = x.tr
indo = x.idn
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
const btnasu = {
    contentText: `${ini_txt}`,
    buttons: but,
    headerType: 1
}
await zeroyt7.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
break






case 'alquran2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18  untuk list id surah ketik ${prefix}listsurah`)
urls = `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${args[0]}.json`
quran = await fetchJson(urls)
ayat = quran.verses
ini_txt = `QS. ${quran.name} : 1-${quran.number_of_ayah}\n\n`
for (var x of ayat) {
arab = x.text
nomor = x.number
latin = x.translation_en
indo = x.translation_id
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break



case 'alquranaudio':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
surah = args[0]
get_result = await fetchJson(`https://equran.id/api/surat/${surah}`)
sab = `Sabar Sedang Proses...\n\n engga dikirim audionya sama bot ? klik ini untuk download : ${get_result.audio}`
reply(sab)
ini_buffer = await getBuffer(get_result.audio)
await zeroyt7.sendMessage(from, ini_buffer, audio, { quoted: ftrol, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/asmaulhusna`)
get_result = get_result.result
ini_txt = `Nama: ${get_result.nama}\n`
ini_txt += `Arab : ${get_result.arab}\n`
ini_txt += `Indonesia : ${get_result.text_id}\n`
ini_txt += `English : ${get_result.text_en}`
reply(ini_txt)
break
case 'kisahnabi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break


//━━━━━━━━━━━━━━━[ FITUR SPEED ]━━━━━━━━━━━━━━━━━//


  case "speed":
      case "ping":
	   case "cek":
 case "runtime":
 case "test":
          case "run":
const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `${ssd}Speed: ${latensi.toFixed(4)} Second \n\nBot Aktif Selama : ${uptime(os.uptime())}`;
          fakegroup(pingnya);
        });
        break
		
		case 'jamsekarang':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break

//━━━━━━━━━━━━━━━[ FITUR FUN ]━━━━━━━━━━━━━━━━━//

case 'cekjadian':
       if (!isGroup)return reply(mess.only.group)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'beban':
       if (!isGroup)return reply(mess.only.group)
              membr = []
              const ngeb = groupMembers
              const todb = groupMembers
              const bebb = ngeb[Math.floor(Math.random() * ngeb.length)]
              const anb = pushname[Math.floor(Math.random() * todb.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${bebb.jid.split('@')[0]}`
              membr.push(bebb.jid)
              mentions(teks, membr, true)
              break


       case 'cekmati':
              if (!q) return reply(`harus nama panggillan tidak boleh 2 kata harus 1 kata.`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break


 case "hobi":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`hobi Nya Siapa Tod\nContoh: ${prefix + command} ari`)
					ini_link = args.join(" ")
					const hob = ['Suka Santuy','Bucin','Main Pb  xban','Suka C0li','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
				    await zeroyt7.sendMessage(from, 'Hobi si : *'+ini_link+'*\n\nJawaban : '+ by, text, { quoted: ftrol })
					break


  case "ganteng":
					// ā ļø¸ Case by DappaUhuy&YogPw

                     if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Ganteng Nya Siapa Tod\nContoh: ${prefix + command} ari`)
					ini_link = args.join(" ")
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					await zeroyt7.sendMessage(from, 'Cek Ganteng nya si : *'+ini_link+'*\n\nJawaban : '+ teng+'%', text, { quoted: ftrol })
					
					break

case "cantik":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Cantik Nya Siapa Tod\nContoh: ${prefix + command} sinta`)
					ini_link = args.join(" ")
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					await zeroyt7.sendMessage(from, 'Cek Cantik nya si : *'+ini_link+'*\n\nJawaban : '+ tik+'%', text, { quoted: ftrol })
					
					break
					
			case "sange":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Sange Nya Siapa Tod\nContoh: ${prefix + command} sinta`)
					ini_link = args.join(" ")
					const san =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nges = san[Math.floor(Math.random() * san.length)]
					await zeroyt7.sendMessage(from, 'Cek Sange nya si : *'+ini_link+'*\n\nJawaban : '+ nges+'% Panik Gak ?', text, { quoted: ftrol })
					
					break
					
	case "lesbi":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`lesbi Nya Siapa Tod\nContoh: ${prefix + command} sinta`)
					ini_link = args.join(" ")
					const les =['Banget','Super','B aja','Engga','Gamungkin','Emang','Baru tau kalao di lesbi?','eh ketahuan wkwkwkw','ehh kok ga bisa ? \n Emang dia manusia ? wkwkwkwk','Panik yaa ?']
					const bi = les[Math.floor(Math.random() * les.length)]
					await zeroyt7.sendMessage(from, 'Cek Lesbi nya si : *'+ini_link+'*\n\nJawaban : '+ bi+'', text, { quoted: ftrol })
					
					break
case "homo":
					// ā ļø¸ Case by DappaUhuy&YogPw
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Homo Nya Siapa Tod\nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const ho =['Banget','Super','B aja','Engga','Gamungkin','Emang','Baru tau kalao di homo?','eh ketahuan wkwkwkw','ehh kok ga bisa ? \n Emang dia manusia ? wkwkwkwk','Panik yaa ?']
					const mo = ho[Math.floor(Math.random() * ho.length)]
					await zeroyt7.sendMessage(from, 'Cek Homo nya si : *'+ini_link+'*\n\nJawaban : '+ mo+'', text, { quoted: ftrol })
					
					break
					
		case "apakah":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Tanya Siapa Tod\nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const ap =['Emang kita kenal kok tanya-tanya','Ya gatau kok tanya bot :v','Ah lu bau sih','Iya','Tidak','Bisa Jadi','Hmmm gimana ya']
					const kah = ap[Math.floor(Math.random() * ap.length)]
					await zeroyt7.sendMessage(from, 'Pertanyaan : apakah *'+ini_link+'*\n\nJawaban : '+ kah+'', text, { quoted: ftrol })
					
					break
		case "kapankah":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Tanya Siapa Tod\nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const ka =['emang kita kenal ?','lihat aja nanti','15 menit','5 menit','1 Jam','Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const pan = ka[Math.floor(Math.random() * ka.length)]
					await zeroyt7.sendMessage(from, 'Pertanyaan : kapankah *'+ini_link+'*\n\nJawaban : '+ pan+'', text, { quoted: ftrol })
					
					break			
					
		case "bisakah":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Tanya Siapa Tod\nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const bis =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya']
					const sak = bis[Math.floor(Math.random() * bis.length)]
					await zeroyt7.sendMessage(from, 'Pertanyaan : bisakah *'+ini_link+'*\n\nJawaban : '+ sak+'', text, { quoted: ftrol })
					
					break				
				
					
	case "sifat":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Sifat Nya Siapa Tod\nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const sif =['Panutan','Pelit','Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const fat = sif[Math.floor(Math.random() * sif.length)]
					await zeroyt7.sendMessage(from, 'Cek Sifat nya si : *'+ini_link+'*\n\nJawaban : '+ fat+'', text, { quoted: ftrol })
					
					break
					
		case "asal":
					// ā ļø¸ Case by DappaUhuy&YogPw

                 if (isBanned) return reply(`Ga bisa akses, Lu diban`)
					if (args.length == 0) return reply(`Sifat Nya Siapa Tod\nContoh: ${prefix + command} rama`)
					ini_link = args.join(" ")
					const siap =['rumah','bawah jembatan','hutan','lampu merah','pinggir sungai','tempat sampah','kawasan mewah','pijat ++','room karaoke','panti asuhan','rawa rawa','pinggir jalan','rumah', 'ya ndak tau kok tanya saya','kepoo']
					const apa = siap[Math.floor(Math.random() * siap.length)]
					await zeroyt7.sendMessage(from, 'Pertanyaan : *asal '+ini_link+'*\n\nJawaban : '+ apa+'', text, { quoted: ftrol })
					
					break
					
					
						
//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//
//api cak lontong https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta//



case "caklontong1":
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
	
   anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json`)
const cakk = anu[Math.floor(Math.random() * anu.length)]
   cak = `*${cakk.soal}*${cakk.jawaban}`
   setTimeout( () => {
   reply('*Jawaban :* '+cakk.jawaban+'\n\n*Alasan :* '+cakk.deskripsi+'', text, {quoted: ftrol}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   zeroyt7.sendMessage(from, cak, text, {quoted: ftrol }) // ur cods
   }, 0) // 1000 = 1s,
   
== 0


 case 'caklontong':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/caklontong.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabancak = get_result.jawaban
			  alasancak = get_result.deskripsi
              kisi_kisicak = jawabancak.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaancak = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaancak+'\n• *kisi²* :'+kisi_kisicak, text, { quoted: mek}).then(() => {
              caklontong[sender.split('@')[0]] = jawabancak.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabancak))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabancak + "\nAlasan: " + alasancak)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}

              break


case 'asahotak':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/asahotak.json`)
             get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabanasah = get_result.jawaban
              kisi_kisiasah = jawabanasah.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaanasah = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaanasah+'\n• *kisi²* :'+kisi_kisiasah, text, { quoted: mek}).then(() => {
              asahotak[sender.split('@')[0]] = jawabanasah.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabanasah))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabanasah)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}

              break
			  case 'siapaaku':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (siapaaku.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/siapaaku.json`)
               get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansiapa = get_result.jawaban
              kisi_kisisiapa = jawabansiapa.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansiapa = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```Siapa Aku?```\n\n• *soal* :'+pertanyaansiapa+'\n• *kisi²* :'+kisi_kisisiapa, text, { quoted: mek}).then(() => {
              siapaaku[sender.split('@')[0]] = jawabansiapa.toLowerCase()
              fs.writeFileSync("./database/siapaaku.json", JSON.stringify(siapaaku))
})
              await sleep(30000)
              if (siapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansiapa))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansiapa)
              delete siapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/siapaaku.json", JSON.stringify(siapaaku))
}

              break
			  

 case 'tebakgambar':
              if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply(`Selesein yg sebelumnya dulu tod`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakgambar.json`)
			  get_result = get_result[Math.floor(Math.random() * get_result.length)]
              ini_imagetebak = get_result.img
              jawabantebak = get_result.jawaban
			  deskrip = get_result.deskripsi
              kisi_kisitebak = jawabantebak.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_imagetebak)
              zeroyt7.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisitebak+'\nWaktu : 40detik' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawabantebak.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(40000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabantebak))
              reply("*WAKTU HABIS. KELAMAAN LU\n\nJawaban*: " + jawabantebak + "\nDeskripsi: " + deskrip)
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}

              break




case 'tebaklogika':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaklogika.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://api.zeks.me/api/siapa-aku?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z`)
              get_result = get_result.data
              jawabansiapat = get_result.jawaban
              kisi_kisisiapat = jawabansiapat.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansiapat = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```TEBAK LOGIKA```\n\n• *soal* :'+pertanyaansiapat+'\n• *kisi²* :'+kisi_kisisiapat, text, { quoted: mek}).then(() => {
              tebaklogika[sender.split('@')[0]] = jawabansiapat.toLowerCase()
              fs.writeFileSync("./database/tebaklogika.json", JSON.stringify(tebaklogika))
})
              await sleep(30000)
              if (tebaklogika.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansiapat))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansiapat)
              delete tebaklogika[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklogika.json", JSON.stringify(tebaklogika))
}

              break
			  
			  
			  case 'susunkata':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/susunkata.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
			  tipe = get_result.tipe
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```SUSUN KATA```\n\n• *soal* :'+pertanyaansust+'\n• *Katagori²* :'+tipe+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              susunkata[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}




              break




case 'tebakbendera':
              if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply(`Selesein yg sebelumnya dulu tod`)
              get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/kuis/tebakbendera`)
              ini_imagetebak = get_result.bendera
              jawabantebak = get_result.nama
              kisi_kisitebak = jawabantebak.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')     
			  zeroyt7.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawabantebak.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(40000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabantebak))
              reply("*WAKTU HABIS. KELAMAAN LU\n\nJawaban*: " + jawabantebak)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}

              break




 case 'tebakkalimat':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkalimat.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```TEBAK KALIMAT```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakkalimat[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
})
              await sleep(30000)
              if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebakkalimat[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
}




              break
			  
			  
			 case 'tebakkabupaten':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkabupaten.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkabupaten.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
			  tipe = get_result.tipe
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```TEBAK KABUPATEN```\n\n• *soal* :'+pertanyaansust+'\n• *Katagori²* :'+tipe+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakkabupaten[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebakkabupaten.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakkabupaten.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebakkabupaten[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkabupaten.json", JSON.stringify(tebakkabupaten))
}
              break
			  
			  
			  case 'tebakkimia':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebakkimia.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.unsur
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.lambang
              zeroyt7.sendMessage(from, '*+* ```TEBAK KIMIA```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebakkimia[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebakkimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakkimia.json", JSON.stringify(tebakkimia))
}
              break
			  
			  
			   case 'tebaklirik':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebaklirik.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```TEBAK LIRIK```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              break
			  
			  
			   
			   case 'tebaktebakan':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tebaktebakan.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```TEBAK TEBAKAN```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tebaktebakan[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
})
              await sleep(30000)
              if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tebaktebakan[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))
}
              break
			  
			  
			   
			   case 'tekateki':
			  if (isBanned) return reply(`Ga bisa akses, Lu diban`)
              if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply(`Masih ada soal yg belum terjawab`)
              get_result = await fetchJson(`https://akuari.ga/sc%20bot/dbbot/game/tekateki.json`)
              get_result = get_result[Math.floor(Math.random() * get_result.length)]
              jawabansus = get_result.jawaban
              kisi_kisisisus = jawabansus.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaansust = get_result.soal
              zeroyt7.sendMessage(from, '*+* ```TEKA TEKI```\n\n• *soal* :'+pertanyaansust+'\n• *kisi²* :'+kisi_kisisisus, text, { quoted: mek}).then(() => {
              tekateki[sender.split('@')[0]] = jawabansus.toLowerCase()
              fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
})
              await sleep(30000)
              if (tekateki.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawabansus))
              reply("WAKTU HABIS. KELAMAAN LU\n\nJawaban: " + jawabansus)
              delete tekateki[sender.split('@')[0]]
              fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
}
              break
			  
			  
			  
			
//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER sleep(30000) = 30 detik]━━━━━━━━━━━━━━━━━//

















break
case 'play':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Nya Mana Tod\nContoh: ${prefix + command} sayang 2`)
ini_link = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/ytplaymp3/2?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&q=${ini_link}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Durasi     : *${get_result.duration}*`
caption += `❖ Size     : *${get_result.size}*`
caption += `\n\n❖ Tunggu Audio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.link} `

ini_buffer = await getBuffer(get_result.thumb)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ytsearch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/ytsearch?query=${query}&apikey=apiakuari`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.ago}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break





case 'xvidiossearch':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} japanese`)
query = args.join(" ")
get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${query}&apikey=Ikyy69`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n`
}
reply(ini_txt)
break
case 'xvidios':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.xhamster.com/vidjsidj`)
ini_link = args[0]
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${ini_link}&apikey=Ikyy69`)
get_audio = get_audio.result.files
textt = `TUNGGU VIDIO SEDANG DIKIRIM JIKA TIDAK DIKIRIM SAMA BOT ATAU TIDAK SABAR MENUNGGU BISA DOWNLOAD MELALUI LINK BERIKUT \n\nDOWNLOAD : ${get_audio.low} `
reply(textt)
ini_buffer = await getBuffer(get_audio.low)
await zeroyt7.sendMessage(from, ini_buffer, video, { quoted: ftrol })
break

case 'cersex':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Judul Nya Mana Tod\nContoh: ${prefix + command} tante`)
ini_link = args.join(" ")
get_result = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/cersex?apikey=404Api&q=${ini_link}`)
get_result = get_result.result
caption = `❖ Judul    : *${get_result.title}*\n`
caption += `❖ Cerita     : *${get_result.cersex}*`
reply(caption)

break







case 'ytmp3':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih yt mp3 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp3a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
reply(`pilih yt mp3 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp3a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
break
case 'ytmp3b':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.zeks.me/api/ytmp3/2?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&url=${ini_link}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Size     : *${get_result.size}*`
caption += `\n\n❖ Tunggu Audio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.link} `
ini_buffer = await getBuffer(get_result.thumb)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.link)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break

case 'ytmp3a':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://zenzapi.xyz/api/downloader/ytmp3?url=${ini_link}&index=2&apikey=apiakuari`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Channel     : *${get_result.channel}*`
caption += `\n\n❖ Tunggu Audio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.url} `
ini_buffer = await getBuffer(get_result.thumb)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.url)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ytmp4':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih yt mp4 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp4a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
reply(`pilih yt mp4 yang mana terdapat 2 pilihan \nContoh: Server 1 = .ytmp4a https://www.youtube.com/watch?v=qZIQAk-BUEc  \n\n Server 2 = .ytmp3b https://www.youtube.com/watch?v=qZIQAk-BUEc`)
break
case 'ytmp4a':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://zenzapi.xyz/api/downloader/ytmp4?url=${ini_link}&apikey=apiakuari`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Channel     : *${get_result.channel}*`
caption += `\n\n❖ Tunggu Vidio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.url} `

ini_buffer = await getBuffer(get_result.thumb)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.url)
await zeroyt7.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol })
break
case 'ytmp4b':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.zeks.me/api/ytmp4/2?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&url=${ini_link}`)
get_result = get_result.result
caption = `❖ Title    : *${get_result.title}*\n`
caption += `❖ Size     : *${get_result.size}*`
caption += `\n\n❖ Tunggu Vidio akan dikirimkan sekitar 1 menit...`
caption += `\n\n Jika tidak sabar menunggu / file tidak dikirim bot bisa download melalui link berikut ${get_result.link} `

ini_buffer = await getBuffer(get_result.thumb)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(get_result.link)
await zeroyt7.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol })
break
case 'iglol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .igvid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .igpost https://www.instagram.com/p/CU0MhPjBZO2/`)
ini_link = args[0]
reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .igvid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .igpost https://www.instagram.com/p/CU0MhPjBZO2/`)
break
case 'igvidlol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=cf986e139a11690077304d29&url=${ini_link}`)
get_audio = get_audio.result
await zeroyt7.sendMessage(from, get_audio, video, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'igpostlol':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=cf986e139a11690077304d29&url=${ini_link}`)
get_audio = get_audio.result
await zeroyt7.sendMessage(from, get_audio, image, { mimetype: Mimetype.image, quoted: ftrol })
break



case 'ig':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .ig1vid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .ig1post https://www.instagram.com/p/CU0MhPjBZO2/`)
ini_link = args[0]
reply(`pilih Instagram yang mana terdapat 2 pilihan \nContoh: Server 1 untuk ig vidio dan igtv = .igvid https://www.instagram.com/p/CU0MhPjBZO2/  \n\n Server 2  untuk post biasa= .igpost https://www.instagram.com/p/CU0MhPjBZO2/`)
break
case 'igvid':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api/igdownload?url=${ini_link}&apikey=Ikyy69`)
get_audioo = await getBuffer(get_audio.linkdownload)
iki = (`Sedang di proses kalau bot tidak kirim vidio nya bisa download melalui link berikut ${get_audio.linkdownload}`)
reply(iki)
await zeroyt7.sendMessage(from, get_audioo, video, { mimetype: 'video/mp4', filename: `${ini_link}.mp4`, quoted: ftrol })
break
case 'igpost':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.instagram.com/p/CU0MhPjBZO2/ `)
ini_link = args[0]
get_audio = await fetchJson(`https://bx-hunter.herokuapp.com/api/igdownload?url=${ini_link}&apikey=Ikyy69`)
iki = (`Sedang di proses kalau bot tidak kirim foto nya bisa download melalui link berikut ${get_audio.linkdownload}`)
reply(iki)
get_audioo = await getBuffer(get_audio.linkdownload)
await zeroyt7.sendMessage(from, get_audioo, image, { mimetype: Mimetype.image, quoted: ftrol })
break




case 'tiktok':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`pilih SERVER TIKTIOK yang mana terdapat 2 pilihan \nContoh: Server 1 = .tiktok1 https://vt.tiktok.com/ZSwWCk5o/  \n\n Server 2 = .tiktok2 https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
reply(`pilih SERVER TIKTIOK yang mana terdapat 2 pilihan \nContoh: Server 1 = .tiktok1 https://vt.tiktok.com/ZSwWCk5o/  \n\n Server 2 = .tiktok2 https://vt.tiktok.com/ZSwWCk5o/`)
break
case 'tiktok1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_result = await fetchJson(`https://hadi-api.herokuapp.com/api/tiktok?url=${ini_link}`)
get_result = get_result.result
caption = `Tunggu Sedang di proses \n\n Jika bot tidak mengirimkan file / lama download melalui ini \n\n❖ Tanpa Watermark    : ${get_result.video.nowm}\n\n Audio : ${get_result.audio_only.audio1}`
reply(caption)
ini_buffer = await getBuffer(get_result.video.nowm)
await zeroyt7.sendMessage(from, ini_buffer, video, { quoted: ftrol })
ini_buffer1 = await getBuffer(get_result.audio_only.audio1)
await zeroyt7.sendMessage(from, ini_buffer1, audio, { quoted: ftrol })

break
case 'tiktok2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await fetchJson(`https://hadi-api.herokuapp.com/api/tiktok?url=${ini_link}`)
get_audio = await getBuffer(get_audio.result.video.nowm)
await zeroyt7.sendMessage(from, get_audio, video, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'tiktok3':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${zerokey}&url=${ini_link}`)
await zeroyt7.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'pinterest':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://zenzapi.xyz/api/pinterest2?query=${query}&apikey=apiakuari`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

case 'joox':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Cari apa tod\n Contoh: ${prefix + command} snowman`)
ini_link = args.join(" ")
get_audio = await fetchJson(`https://zenzapi.xyz/api/downloader/joox?query=${ini_link}&apikey=apiakuari`)
ini = (`jika bot belum kirimkan audio nya dan engga sabar tungguin bisa download melalui link berikut : ${get_audio.result.mp3Link}`)
reply(ini)
get_audioo = await getBuffer(get_audio.result.mp3Link)
await zeroyt7.sendMessage(from, get_audioo, audio, { mimetype: 'audio/mp4', filename: `${get_audio.result.lagu}.mp3`, quoted: ftrol })
but = [
{ buttonId: `${prefix + command}lirik ${ini_link}`, buttonText: { displayText: 'Lirik' }, type: 1 }
]
ini_txt = `Untuk menampilkan lirik lagu ${get_audio.result.lagu} klik dibawah ini`

const bjoox = {
	contentText: `${ini_txt}`,
    buttons: but,
    headerType: 1
}
await zeroyt7.sendMessage(from, bjoox, MessageType.buttonsMessage, {quoted: ftrol})
break



case 'jooxlirik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`cari apaTod\nContoh: ${prefix + command} snowman`)
ini_link = args[0]
get_audio = await fetchJson(`https://zenzapi.xyz/api/downloader/joox?query=${ini_link}&apikey=apiakuari`)
ini = (`Lirik  : ${ini_link} \n\n ${get_audio.lirik.result}`)
reply(ini)
break

case 'texttovoice':
if (isBanned) return reply(`Ga bisa akses lu di ban`)
if (args.length == 0) return reply(`mau  buat suara apa ngap\n Contoh: ${prefix + command} Ari ganteng`)
query = args.join(" ")
get_result = await getBuffer(`https://api.zeks.me/api/tts?apikey=apivinz&code=id&text=${query}`)
await zeroyt7.sendMessage(from, get_result, audio, { quoted: ftrol })
break

//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//

case 'character':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await zeroyt7.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await zeroyt7.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await zeroyt7.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${zerokey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Kata apa yang mau lu cari di kkbi\nContoh: ${prefix + command} pohon`)
query = args.join(" ")
anu = await fetchJson(`https://janbot-api.herokuapp.com/api/info/kbbi?kata=${query}`)
ini_txt += `Kata : ${anu.result.lema}\nArti : ${anu.result.arti}\n`
reply(ini_txt)
break
case 'jarak':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta  yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${zerokey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/wikipedia?query=${query}&apikey=apiakuari`)
get_result = get_result.result
los = `Judul: ${get_result.judul} \n\n Isi: ${get_result.isi}`
reply(los)
break
case 'translate':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem  \n\n untuk en adalah inggris silahkan cari kode negara masing-masing`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/translate/${kode_negara}?query=${ini_txt}&apikey=apiakuari`)
get_result = get_result.result
init_txt += `Kode Negara : ${kode_negara}\n`
init_txt += `Original : ${ini_txt}\n`
init_txt += `Translated : ${get_result}\n`
reply(init_txt)
break
case 'jadwaltv':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} SCTV`)
channel = args[0]
get_result = await fetchJson(`https://api.zeks.me/api/jadwaltv?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&channel=${channel}`)
get_result = get_result.result
ini_txt = `Pencarian TV  ${channel}\n\n ${get_result}`
reply(ini_txt)
break
case 'infogempa':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=Ikyy69`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.Wilayah}\n`
ini_txt += `Waktu : ${get_result.Waktu}\n`
ini_txt += `Magnitude : ${get_result.Magnitudo}\n`
ini_txt += `Kedalaman : ${get_result.Kedalaman}\n`
ini_txt += `Bujur : ${get_result.Bujur}\n`
ini_txt += `Lintang : ${get_result.Lintang}`
get_buffer = await getBuffer(get_result.Map)
await zeroyt7.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${zerokey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await zeroyt7.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://covid19.mathdro.id/api/countries/indonesia`)
ini_txt = `Positif : ${get_result.confirmed.value}\n`
ini_txt += `Sembuh : ${get_result.recovered}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.kawalcorona.com/`)
get_result = get_result.attributes
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes':
case 'quote':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotes = await fetchJson(`https://zenzapi.xyz/api/random/quote?apikey=apiakuari`)
quotes = quotes.result
author = quotes.by
quotes = quotes.quote
reply(`_${quotes}_\n\n*― ${author}*`)
break
case 'quotesanime':
case 'quoteanime':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotes = await fetchJson(`https://zenzapi.xyz/api/animequotes?apikey=apiakuari`)
quotes = quotes.result
quote = quotes.en
quote1 = quotes.id
char = quotes.character
anime = quotes.anime
reply(`_${quote}_\n${quote1}\n*― ${char}*\n*― ${anime}*`)
break
case 'quotesdilan':
case 'quotedilan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/dilanquote?apikey=apiakuari`)
reply(quotedilan.result.message)
break
case 'randomnama':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${zerokey}`)
reply(anu.result)
break
case 'pantunpakboy':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://api.zeks.me/api/pantun?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&`)
reply(quotedilan.result.pantun)
break
case 'faktaunik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/faktaunik?apikey=apiakuari`)
reply(quotedilan.result)
break
case 'pantun':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/pantun?apikey=apiakuari`)
reply(quotedilan.result)
break
case 'puisi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/puisi?apikey=apiakuari`)
reply(quotedilan.result.message)
break
case 'quotesislami':
case 'quoteislami':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
quotedilan = await fetchJson(`https://zenzapi.xyz/api/randomquote/muslim?apikey=apiakuari`)
ini_txt = `Positif : ${quotedilan.result.text_id}`
reply(ini_txt)
break
case 'quotesimage':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://zenzapi.xyz/api/motivasi?apikey=apiakuariand}?apikey=${zerokey}`)
reply(get_result.message)
break
case 'katasenja':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://zenzapi.xyz/api/katasenja?apikey=apiakuari`)
reply(anu.result.message)
break
case 'quotesbucin':
case 'quotebucin':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
anu = await fetchJson(`https://zenzapi.xyz/api/bucinquote?apikey=apiakuari`)
reply(anu.result.message)
break
case 'bikinquotes':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukan 1 kata saja\nContoh: ${prefix + command} lelah`)
query = args.join(" ")
anu = await fetchJson(`https://zenzapi.xyz/api/jagokata?query=${query}&apikey=apiakuari`)
anu = anu.result
los = `Hasil: ${anu.message}`
reply(los)
break







//━━━━━━━━━━━━━━  brainly ]━━━━━━━━━━━━━━━━━//




case 'brainly':
  	if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
				brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					zeroyt7.sendMessage(from, teks, text,{quoted:ftrol,detectLinks: false})                        
		            })              
					break




case 'cord':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Cord Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} ari gantrng`)
query = args.join(" ")
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/chordlagu?lagu=${query}&apikey=beta`)
anu = anu.result
los = `Hasil: ${anu.result}`
reply(los)
break

case 'lirik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Lirik Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} ari gantrng`)
query = args.join(" ")
anu = await fetchJson(`https://zenzapi.xyz/api/liriklagu?query=${query}&apikey=apiakuari`)
anu = anu.result
los = `Judul: ${anu.judul}\nPenyanyi : ${anu.penyanyi} \n\n Lirik : ${anu.lirik}`
reply(los)
break


case 'memeindo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://zenzapi.xyz/api/random/memeindo?apikey=apiakuari`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'memeindo1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z`)
iki = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, iki, image, { quotes: ftrol })
break
case 'darkjokes':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await getBuffer(`https://zenzapi.xyz/api/random/darkjoke?apikey=apiakuari`)
await zeroyt7.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'darkjokes1':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/darkjoke?apikey=h4ck3rs404`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'darkjokes2':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

case 'jokesreceh':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://candaan-api.vercel.app/api/image/random`)
ini_buffer = await getBuffer(get_result.data.url)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break


case 'bos':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
iki = (`YAP`)
reply(iki)
break
case 'hartatahta':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`masukin text nya tod\nContoh: ${prefix + command} ARI`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&text=${query}`)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break


//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage': 
if (!isPrem) return reply(`FITUR INI TERKUNCI. SILAHKAN DAFTAR 
AKSES KE OWNER ADMIN wa.me/628976388612 FREE \n\n FITUR TERKUNCI LAINYA BISA CEK 
CHAT .hiddenmenu`)


if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} ari gantrng`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://zenzapi.xyz/api/gimage2?query=${query}&apikey=apiakuari`)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${zerokey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/sgplay?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&q=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.price}\n`
ini_txt += `Rating : ${x.rating}\n`
}
reply(ini_txt)
break
case 'shopee':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.zeks.me/api/shopee?apikey=OXJvP78pHDIp2ZySEQQqIQG4j2z&q=${query}`)
get_result = get_result.data
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.terjual}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.location}\n`
ini_txt += `Link : ${x.url}\n\n`
ini_txt += `Informasi Barang : ${x.information}\n\n`
}
reply(ini_txt)
break
case 'google':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/google-search?text=${query}&apikey=Ikyy69`)
get_result = get_result.data
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/artinama?text=${ini_nama}&apikey=apiakuari`)
get_result = get_result.result
reply(get_result.message)
break
case 'artimimpi':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`mimpinya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://zenzapi.xyz/api/artimimpi?query=${ini_nama}&apikey=apiakuari`)
get_result = get_result.result
reply(get_result.message)
break
case 'jodoh':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`jodohnya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://zenzapi.xyz/api/jodoh?text=${nama1}&text2=${nama2}&apikey=apiakuari`)
get_result = get_result.result.message
ini_txt = `Nama Anda : ${get_result.namaAnda}\n`
ini_txt = `Nama Pasangan : ${get_result.namaPasangan}\n`
ini_txt = `Positif : ${get_result.positif}\n`
get_buffer = await getBuffer(get_result.love)
await zeroyt7.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'jadian':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://zenzapi.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=apiakuari`)
get_result = get_result.result
ini_txt = `Deskripsi : ${get_result.message}`
reply(ini_txt)
break
case 'haribaik':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Tanggal nya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://zenzapi.xyz/api/haribaik/${tanggal}/${bulan}/${tahun}?apikey=apiakuari`)
get_result = get_result.result
ini_txt = `Deskripsi : ${get_result.message}`
reply(ini_txt)
break

case 'harilarangan':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Tanggal nya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://zenzapi.xyz/api/harilarangan/${tanggal}/${bulan}/${tahun}?apikey=apiakuari`)
get_result = get_result.result
ini_txt = `Deskripsi : ${get_result.message}`
reply(ini_txt)
break
case 'tebakumur':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${zerokey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
zeroyt7.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${zerokey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
zeroyt7.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE HIDDEN ]━━━━━━━━━━━━━━━━━//



case 'santuy':
case 'bocil':
case 'ukhty':
case 'cecan':
case 'geayubi':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/${command}`)
ini_buffer = await getBuffer(get_result.result.url)
await zeroyt7.sendMessage(from, ini_buffer, video, { quotes: ftrol })
break
case 'hijab':
case 'cecan':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/asupan/${command}`)
ini_buffer = await getBuffer(get_result.result.url)
await zeroyt7.sendMessage(from, ini_buffer, image, { quotes: ftrol })
break



case 'ass':
case 'ahegao':
case 'bdsm':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'hentaigif':
case 'jahy':
case 'masturbation':
case 'nsfwNeko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://janbot-api.herokuapp.com/api/nsfw/${command}`)
ini_buffer = await getBuffer(get_result.result)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

case 'waifu':
case 'shinobu':
case 'neko':
case 'megumin':
case 'bully':
case 'cuddle':
case 'cry':
case 'kiss':
case 'hug':
case 'awoo':
case 'lick':
if (!isPrem) return reply(`Lubukan ANGGOTA KHUSUS wkwkwk`)
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
getBuffer(`https://janbot-api.herokuapp.com/api/sfw/${command}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { quoted: ftrol })
})
break
case 'bts':
case 'exo':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${zerokey}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { quoted: ftrol })
})
break

case 'loli':
if (isBanned) return reply(`Ga bisa akses, Lu diban`)
get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
ini_buffer = await getBuffer(get_result.link)
await zeroyt7.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//


case 'addrespon':
case 'addres':
			if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
case 'delres':
			if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
case 'listres':
             if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break



case 'addprem':
				if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				premm = body.slice(5)
				_prem.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('database/prem.json', JSON.stringify(_prem))
				reply(`Berhasil TAMBAH PREMIUM nomor : wa.me/${premm} `)
				break
case 'ban':
				if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
				bnnd = body.slice(5)
				_ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('database/banned.json', JSON.stringify(_ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break

case 'unban':  
				if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
					delp = body.slice(7)
					_ban.splice(`${delp}@s.whatsapp.net`)
					fs.writeFileSync('database/banned.json', JSON.stringify(_ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break


case 'listban':
		case 'banlist'://By M4N1K
		if (!isOwner) return reply(`Lubukan OWNER wkwkwk`)
					teks = '*List Ban:*\n\n'
					for (let manikgans of _ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${_ban.length}*`
					zeroyt7.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": _ban } })
					break



case 'done':
case 'owner':
        sendKontak(from, owner, `${ownername}`, `Pemilik ${botname}`);
        sendButMessage(
          from,
          `Mau tanyaĀ² tentang apa?`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}scjojobot`,
              buttonText: {
                displayText: `SCRIPT`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}igstalk sofunsyabi.id`,
              buttonText: {
                displayText: `INSTAGRAM`,
              },
              type: 1,
            },
          ]
        );
        break;
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await zeroyt7.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await zeroyt7.downloadMediaMessage(encmedia)
for (let _ of anu) {
zeroyt7.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zeroyt7.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break

//━━━━━━━━━━━━━━━[ FITUR SEWA BOT ]━━━━━━━━━━━━━━━━━//

case 'sewabot':
but = [
{ buttonId: `${prefix}sebulan`, buttonText: { displayText: 'SEBULAN' }, type: 1 },
{ buttonId: `${prefix}permanen`, buttonText: { displayText: 'PERMANEN' }, type: 1 }
]
sendButton(from, "Silahkan Pilih List Sewa Di Bawah Ini", faketeks, but, mek)
break
case 'sebulan':
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "Silahkan Pilih Metode Pembayaran Dibawah", faketeks, but, mek)
break
case 'permanen':
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "Silahkan Pilih Metode Pembayaran Dibawah", faketeks, but, mek)
break
case 'gopay':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "GOPAY : SCAN PP (SALINI)", faketeks, but, mek)
break
case 'dana':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "DANA : 085727492435 (SUTARSIH)", faketeks, but, mek)
break
case 'ovo':
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "SHOPEPAY : 085727492435 (Deva Nanda)", faketeks, but, mek)
break
				
//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return zeroyt7.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}
