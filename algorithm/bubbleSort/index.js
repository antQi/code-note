function bubbleSort(arr) {
    var len = arr.length
    for (var i = 0; i < len; i++) {
        for (var j = len; j > 0; j--) {
            if (arr[j] < arr[j - 1])
                var tempj = array[j];
            arr[j - 1] = arr[j]
            arr[j] = tempj
        }
    }
    return arr
}

exports.bubbleSort = bubbleSort