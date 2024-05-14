const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713494587";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_52_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDYxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5MUhiQ2M3NVQ1S3RWUnNsRDAzazNwMFdHVmh4dGhoUVpkbGtvM25ENElFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUcFRqMnl0WlE2U2FfeWRxYTNxdzZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZmZmEyYzY5LTE1ZGQtNDY5ZC04NzgzLTQ4NzE4NTU3NTdlOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA0LFxuICAgICAgMTAxLFxuICAgICAgMTMxLFxuICAgICAgMjA2LFxuICAgICAgMTEwLFxuICAgICAgMTc2LFxuICAgICAgMTM3LFxuICAgICAgMjIxLFxuICAgICAgNTUsXG4gICAgICA4MyxcbiAgICAgIDE2OSxcbiAgICAgIDI0OSxcbiAgICAgIDI4LFxuICAgICAgODcsXG4gICAgICAzMCxcbiAgICAgIDEzLFxuICAgICAgMjYsXG4gICAgICAxMzEsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAyNTIsXG4gICAgICAxODMsXG4gICAgICA3MCxcbiAgICAgIDIwMyxcbiAgICAgIDEyMSxcbiAgICAgIDE3NSxcbiAgICAgIDc4LFxuICAgICAgOTQsXG4gICAgICAxODgsXG4gICAgICA1MSxcbiAgICAgIDMyLFxuICAgICAgMTE4LFxuICAgICAgNixcbiAgICAgIDEyOCxcbiAgICAgIDIzLFxuICAgICAgNzMsXG4gICAgICAxNjMsXG4gICAgICAyNTEsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOSDJYN1NFSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzNDk0NTg3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzY4NzcwNzA1ODIyNjo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRoaXMgSG9wZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2SWxkd0dFTVN0anJJR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidVo1ZnB5cWJsaStZNnk0d2JRc0VPaWJyU2daZGtWNGM0aXJOOW1oZjBCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxc0dJb0R3MVlHWWtjL2NUd3kzWVlzVHJWUHMyaHQrYUNZSXdpUGJjUk1zRmhEcERoN1BtZEpkTjFZWEVGeUdLcXFqRkludXEyQ2Q3NG1zZkFwNHJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtUzIvUGY1Q0cyR3pqbzBtMU4zQ3BhQlJGSk5HZzhNdHZydFdHQTJTS2Z4MThESlVnRXlxTnB4dW5oTit3Y1QwU2cxSmd5Wkh5QmkxS1V3MGowRWhqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTM0OTQ1ODc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1NzA1NTQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEU0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQRTQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTYWZrckNsQVRiTDVaR0g1R2UzaERIazYvR050S1orZ0ljNENRclZna0tNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MDM4OTU5MzQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTM2MzQ5Nzc1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
