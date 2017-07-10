function insertSort(arr) {
    var len = arr.length
    for (var i = 1; i < arr.length; i++) {
        var tempi = arr[i]

        var j
        for (j = i; j > 0 && tempi < arr[j - 1]; j--) {
            arr[j] = arr[j - 1]

            // if (tempi < arr[j - 1]) {
            //     arr[j] = arr[j - 1]
            //     arr[j - 1] = tempi
            // } else {
            //     break
            // }
        }
        arr[j] = tempi
    }
    return arr
}

exports.insertSort = insertSort