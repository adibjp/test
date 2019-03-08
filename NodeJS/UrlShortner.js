const { BitlyClient } = require('bitly');
const json2csv = require('json2csv').parse;
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const fields = ['originalLink', 'shortenedLink'];
const opts = { fields };
const bitly = new BitlyClient('c06dbc6145063b91530d0b41eca2e91f118f3250', {});

function urlShortner(array, destinationFileName) {
  var resultArr = [];
  var csv;
  if (array != null) {
    counter = 0;
    max = array.length;
    array.forEach(element => {

      bitly
        .shorten(element)
        .then(function (result) {
          resultArr.push({
            originalLink: result.long_url,
            shortenedLink: result.url
          });

          if (++counter == max)
            getCsv(resultArr, destinationFileName);

        })
        .catch(function (error) {
          console.error(error);
          counter++;
        });
    });
  }
}
function getCsv(resultArr, destinationFileName) {
  const csvWriter = createCsvWriter({
    path: destinationFileName,
    header: [
        {id: 'originalLink', title: 'ORIGINAL LINK'},
        {id: 'shortenedLink', title: 'SHORTENED LINK'}
    ]
});
  // csv = json2csv(resultArr, opts);
  csvWriter.writeRecords(resultArr) 
    .then(() => {
        console.log('CSV saved in file '+ destinationFileName);
    });
}
module.exports.UrlShortner = urlShortner;
