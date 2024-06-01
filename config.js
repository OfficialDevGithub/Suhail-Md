const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ai789@gmail.com"
global.location="Zimbabwe,Masvingo."


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


global.devs = "263713494587" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713494587";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_05_18_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDY5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE3azRqWHd0YVl3V3VLWkhKK3E5Nm9ydXlsNk10d3JXZm4xWEFuTjU4Y1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNDk0NTg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RUNCNDA4QjNFNzNEOUYzNTc3MjdDMjJGMDJENjExRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyMTkxMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM0OTQ1ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNFODVFQjQzMjk0MEU0ODczQTVENkIzQTlGRTEwNjFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzIxOTEzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhfQWpXWW9BVEN5bWt0Z3pNdEc4Y1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmZiMWZjZTYtOTA5YS00MGNkLWFiYjQtYTYxZTU5NmRlMDI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDQ2LFxuICAgICAgMTc2LFxuICAgICAgMTE0LFxuICAgICAgODcsXG4gICAgICA5OCxcbiAgICAgIDY3LFxuICAgICAgNDksXG4gICAgICA4NyxcbiAgICAgIDE5NyxcbiAgICAgIDM5LFxuICAgICAgMjExLFxuICAgICAgMjA1LFxuICAgICAgMjQ3LFxuICAgICAgOTksXG4gICAgICAyMTcsXG4gICAgICAxNzQsXG4gICAgICAxNzQsXG4gICAgICAxODksXG4gICAgICAxOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICA2LFxuICAgICAgMTc5LFxuICAgICAgNjMsXG4gICAgICA0OCxcbiAgICAgIDIxNyxcbiAgICAgIDc4LFxuICAgICAgMjQ4LFxuICAgICAgMjI0LFxuICAgICAgMjM2LFxuICAgICAgMjU1LFxuICAgICAgMjAyLFxuICAgICAgMjMzLFxuICAgICAgMjE5LFxuICAgICAgMTY1LFxuICAgICAgODcsXG4gICAgICAxOTUsXG4gICAgICAxODIsXG4gICAgICAyMTUsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzVaVjRFVktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzQ5NDU4NzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3Njg3NzA3MDU4MjI2OjE1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRlZmVuZGVyIE9mIFRoZSBUcnV0aCFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT0psZHdHRUxMZTZySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVaNWZweXFibGkrWTZ5NHdiUXNFT2liclNnWmRrVjRjNGlyTjltaGYwQm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYWJkdDFZdDl2Q3h2aEphVzcxc0Rodnc3SXdwK2IyV2ZBVmY2KzQ1R0l4K2dMVzB0MWZRNmVQOTVrcFpWa0hkRXNXd0xsT3FkUUFzcTJlM1B5RThXQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTzlLcTlESWpHNStCNEk5TzZEd1h0bVppMmtSalpoVmh3QktCUjQvYyswWWlhTjQzUUhwcEt2WlMvNzdqQ3l2eEx1VWRVT0hOaS9QV3NHNjIxamRaalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEzNDk0NTg3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyMTkxMjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGbmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZuay5qc29uIjogIntcImtleURhdGFcIjpcIjgxWXdCRDlwUEovWHNGNEloQmkvZXhQa1pTdW9kQmYrKy8yYUhQZWdZdG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwMzg5NTkzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MjE3NDg2ODk5XCJ9Igp9"  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Official AI",
  ownername:process.env.OWNER_NAME|| "AI Dev",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "AI"  ).toUpperCase(),



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
