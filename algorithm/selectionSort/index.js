function selectionSort(arr) {
    var len = arr.length

    for (var i = 0; i < len; i++) {
        // 寻找[i,n)区间的最小值
        for (var j = i + 1; j < len; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function checkSort(arr) {
    var len = arr.length
    var isSort = true
    for (var i = 0; i < len; i++) {
        if (arr[i] > arr[1 + 1]) {
            isSort = false
            return
        }
    }
    return isSort
}

module.exports = {
    checkSort: checkSort,
    selectionSort: selectionSort
}