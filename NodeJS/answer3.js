var request = require('request');
var fs = require('fs');
var writeStream = fs.createWriteStream('googleCopy.txt')
request('https://www.google.com').pipe(writeStream);
