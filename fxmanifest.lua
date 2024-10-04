fx_version 'cerulean'
game 'gta5'

author 'Your Name'
description 'BS-Notify - A Simple FiveM Notification System'
version '1.0.0'

-- UI
ui_page 'html/index.html'

-- Files
files {
    'html/index.html',
    'html/bs-notify.js',
    'html/styles.css'
}

-- Single script for the notification logic
client_script 'bs-notify.lua'

-- Export the notification function
export 'BSNotify'