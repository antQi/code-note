// 归并的本质是一个递归排序的过程

function mergeSort(arr) {
    var len = arr.length
    _mergeSort(arr, 0, len - 1)
}

/**
 * 
 * @param {Array} 要处理的数据
 * @param {number} 开始位置
 * @param {number} 结束位置
 */
function _mergeSort(arr, left, right) {
    if (left >= right) { return }

    var middle = (left + right) / 2 // 数字太大溢出怎么办
    _mergeSort(arr, left, middle)
    _mergeSort(arr, middle + 1, r)
}


/**
 * 
 * @param {*} arr 
 * @param {*} left 
 * @param {*} middle 
 * @param {*} right 
 */
function _merge(arr, left, middle, right) {

}