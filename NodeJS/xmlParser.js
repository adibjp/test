var parse = require('xml-parser');
var inspect = require('util').inspect;

function xmlParser(xml, isDeep) {
    var xml = parse(xml);
    if (!isDeep)
        return xml;
    else
        return inspect(xml, { colors: true, depth: Infinity });
}
module.exports.XmlParser = xmlParser;