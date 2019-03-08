var request = require('request');
var path = require('path');
var fs = require('fs');
var zlib = require('zlib');
var writeStream = fs.createWriteStream('a.jpg')

function createDirectory(filePath) {
    var dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        mkdirp(dirname);
    }
    fs.mkdirSync(filePath);
  }

  
var downloadFile = function (index,url, dest, callback) {
    
    request.get(url)
        .on('error', function (err) { console.log('err'+err) })
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream(dest))
        .on('close', callback);

};

var currDir ='',dirCounter = 0;
var imgList = ["https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"];

for (var i = 0; i < imgList.length; i++) {
    var filename = (imgList[i].split('/').pop()).split('.')[0];
    console.log('Downloading Image Index[' + i + ']');
    if(i%5 == 0){
        currDir = 'dir'+ dirCounter++;
        createDirectory(currDir)
    }
    downloadFile(i, imgList[i], currDir+ '/' + filename, function () {
    });
};

