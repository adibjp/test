(function () {

    var MetadataParserTemplate = function () {
        var _version;
        var _channel;
        var _keyField;
        this.setVersion = function (version) {
            _version = version;
        }
        this.getVersion = function () {
            return _version;
        }
        this.setChannel = function (channel) {
            _channel = channel;
        }
        this.getChannel = function () {
            return _channel;
        }
        this.setKeyField = function (keyField) {
            _keyField = keyField;
        }
        this.getKeyField = function () {
            return _keyField;
        }
        this.getKeyFields = function (jsonArray) {
            if (!(jsonArray instanceof Array)) {
                console.log('Error: JSON Array required');
                return;
            }
            if (_keyField == undefined || typeof _keyField != 'string') {
                console.log('Error: keyfield undefined or not string');
                return;
            }
            var result = [];
            jsonArray.forEach(function (jsonObj) {
                if (jsonObj[_keyField])
                    result.push(jsonObj[_keyField]);
            });
            return result;
        }
        return this;
    }

    var metadataParserObj = new MetadataParserTemplate();
    var JsonArr = [
        { channel: 'A', otherData: 'D' },
        { channel: 'B', otherData: 'f' },
        { otherData: 'P' },
        { channel: 'D', otherData: 'X' },
    ];
    metadataParserObj.setKeyField('channel');
    console.log(metadataParserObj.getKeyFields(JsonArr));

})()