(function () {
    var SortArray = function (inpArray) {
        this.originalArray = inpArray;
        var sortArray = function(arr) {
            return arr.sort();
        }
        this.getSortedArray = function () {
            return sortArray(this.originalArray);
        }       
        

    }

    var SortObjectArray = function (jsonArr) {
        SortArray.call(this, jsonArr);
        var sortArray = function(arr) {
            return _.sortBy(arr, "key")

        }
        this.getSortedArray = function () {
            return sortArray(this.originalArray);
        } 
    }
    SortObjectArray.prototype = Object.create(SortArray.prototype);
    SortObjectArray.prototype.constructor = SortObjectArray;

    var JsonArr = [
        {key:5},
        {key:1},
        {key:3},
        {key:2},
        
    ]
    var sortObj = new SortObjectArray(JsonArr);
    console.log(sortObj.getSortedArray());

})()