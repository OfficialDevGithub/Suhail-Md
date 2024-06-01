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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_51_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MCxcbiAgICAgICAgNixcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWm9CRUlLNEZhckxIUkNWcVhxZjhiRktxNEdILytUNldLZGxTOTJBMmE0bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibldwSzFlbzZRN1M0ak1BY0tfUVJZUVwiLFxuICBcInBob25lSWRcIjogXCIyM2ZmYmQ2ZS1hZTlhLTQwNjgtOTJhNC1iODU1NzMwZmZiZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAxMjYsXG4gICAgICAxMzcsXG4gICAgICA4MixcbiAgICAgIDExMSxcbiAgICAgIDc2LFxuICAgICAgMjM2LFxuICAgICAgMTUzLFxuICAgICAgNyxcbiAgICAgIDI0NyxcbiAgICAgIDIxOSxcbiAgICAgIDE2NSxcbiAgICAgIDE5OSxcbiAgICAgIDE2OCxcbiAgICAgIDI0NixcbiAgICAgIDY0LFxuICAgICAgMjQwLFxuICAgICAgMjM3LFxuICAgICAgMjIsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDIxMSxcbiAgICAgIDUsXG4gICAgICAyMDgsXG4gICAgICA0LFxuICAgICAgMjIxLFxuICAgICAgMjksXG4gICAgICA1NSxcbiAgICAgIDIzNSxcbiAgICAgIDE3NixcbiAgICAgIDE1MixcbiAgICAgIDkyLFxuICAgICAgMjIwLFxuICAgICAgMTA1LFxuICAgICAgMTAxLFxuICAgICAgMTM0LFxuICAgICAgNjgsXG4gICAgICAxLFxuICAgICAgMTI2LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWQkRYVFJYR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzNDk0NTg3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDc2ODc3MDcwNTgyMjY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUtKbGR3R0VNblI2cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1WjVmcHlxYmxpK1k2eTR3YlFzRU9pYnJTZ1pka1Y0YzRpck45bWhmMEJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9YL1RZTmhMK0RMRUlnM3RLZGxMZ2pFYmJSWVRTSmNOOHdRMkFmNHg0c0pkdmUxM0cxWDhCbnRtd05xUkZMZGhobVQ2cCtxTVIyRjBMU1REQ0F1VkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjc3My9uWGlaM2dQK1VuYXdSZFlxdlQ2NXJweUY3MGZQbzNEcXVjUlBSRlo2Q2pCUzhweVpGL05CVk9GeUhSWHpnVVlEcEhpVFFpSHVaTVRRSDB6UWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzQ5NDU4NzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MjE3NDg1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
