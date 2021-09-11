const request = require('request')
const fs = require("fs")

let url = "https://fb.watch/v/1oCnVeyoO/"

request(url).pipe(fs.createWriteStream('doodle2.mp4'))