var bubbleSort = require('./index').bubbleSort
var helper = require('../helper')
var print = helper.print
var randomArr = helper.randomArr
var timing = helper.timing

var n = 100000
var min = 10
var max = 5555
var arr = randomArr(n, min, max)

/**
 * 100    0.415ms
 * 1000   7.805ms
 * 10000  763.115ms
 * 100000 71891.106ms
 */
timing(function() {
    bubbleSort(arr)
})