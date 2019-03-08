var fs = require('fs');
var xml = require('./xmlParser');
const readline = require('readline');
var inspect = require('util').inspect;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getJSON(filename) {
    console.log("aa"+filename);
    var xmlFile = fs.readFileSync(filename, 'utf8');
    return xml.XmlParser(xmlFile, true);
}

rl.question('Enter file Path : ', (answer) => {
    console.log(getJSON(answer));
    rl.close();
});