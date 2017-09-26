/**
 * 在一个有8个int数据的数组中，随机给出数组的数据，找出最大和第二大元素一定需要进行（ ）次比较
 * annser: 9
 */

var arr = [45, 65, 2, 1, 43, 57, 3, 32]
var len = arr.length

// 冒泡
var compareCount0 = 0

function bubble(arr) {
    var _arr = arr.slice()
    for (var i = 0; i < len; i++) {
        for (var j = len; j > 0; j--) {
            compareCount0++
            if (_arr[j] > _arr[j - 1]) {
                var temp = _arr[j]
                _arr[j] = _arr[j - 1]
                _arr[j - 1] = temp
            }
        }
    }
    console.log(_arr)
    console.log(_arr[0], _arr[1])
    console.log('count:' + compareCount0)
}

bubble(arr)

// 选择
var compareCount1 = 0

function selection(arr) {
    var _arr = arr.slice()

    for (var i = 0; i < len; i++) {
        for (var j = i; j < len; j++) {
            compareCount1++
            if (_arr[j] > _arr[j - 1]) {
                var temp = _arr[j]
                _arr[j] = _arr[j - 1]
                _arr[j - 1] = temp
            }
        }
    }
    console.log(_arr)
    console.log(_arr[0], _arr[1])
    console.log('count:' + compareCount1)
}

selection(arr)