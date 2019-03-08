var handlebars = require('handlebars');
var fs = require('fs');

let rawdata = fs.readFileSync('sampleJson.json', 'utf8'); 
let jsonData = JSON.parse(rawdata); 
var products  = {products: jsonData};
fs.readFile('handlebarsTemplate.hbs', function(err, data){
  if (!err) {
    var source = data.toString();    
    renderToString(source, products);
    console.log(renderToString(source, products));
  } else {
  }
});

function renderToString(source, data) {
  var template = handlebars.compile(source);
  var outputString = template(data);
  return outputString;
}

