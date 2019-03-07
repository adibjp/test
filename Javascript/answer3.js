(function () {

    
    function groupObjectsBy(jsonArray, itemName) {
        var resultObj = {};
        if (!(jsonArray instanceof Array)) {
            console.log('Error: JSON Array required');
            return;
        }
        if (itemName == undefined || typeof itemName != 'string') {
            console.log('Error: keyfield undefined or not string');
            return;
        }

        jsonArray.forEach(function (jsonObj) {
            if (jsonObj[itemName]) {
                if (!resultObj[jsonObj[itemName]]) {
                    resultObj[jsonObj[itemName]] = [];
                }
                resultObj[jsonObj[itemName]].push(jsonObj);
            }
        });
        return resultObj;
    }
    var inpArr = [
        {
            "channel": "A",
            "name": "shoe"
        },
        {
            "channel": "A",
            "name": "electronics"
        },
        {
            "channel": "B",
            "name": "apparel"
        },
        {
            "channel": "C",
            "name": "electronics"
        }
    ];
    console.log(groupObjectsBy(inpArr, 'channel'));

})()