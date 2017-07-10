function print() {
    var arr = Array.prototype.slice.call(arguments)
    console.log(arr.join(''))
}

/**
 * 生成随机数组
 * @param {*num} 数组长度
 * @param {*min} 最小值
 * @param {*max} 最大值
 */
function randomArr(num, min, max) {
    var arr = []
    for (var i = 0; i < num; i++) {
        var ii = Math.floor(Math.random() * (max - min) + 1)
        arr.push(ii)
    }
    return arr
}

/**
 * 执行时间
 * @param {*fn} 执行程序
 */
function timing(fn) {
    console.time('big arr')
    fn()
    console.timeEnd('big arr')

}

module.exports = {
    print: print,
    randomArr: randomArr,
    timing: timing
}