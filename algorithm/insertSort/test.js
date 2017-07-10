var insertSort = require('./index').insertSort
var helper = require('../helper')
var print = helper.print
var randomArr = helper.randomArr
var timing = helper.timing

var n = 10000
var min = 10
var max = 5555
var arr = randomArr(n, min, max)

/**
 * 100    1.782ms
 * 1000   2.816ms
 * 10000  33.037
 * 100000 2740.663ms
 */
timing(function() {
    var res = insertSort(arr)
    print(res)
}, true)