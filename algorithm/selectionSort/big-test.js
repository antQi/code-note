var selectionSort = require('./index')
var sort = selectionSort.selectionSort
var checkSort = selectionSort.checkSort
var helper = require('../helper')
var print = helper.print
var randomArr = helper.randomArr
var timing = helper.timing


var range = 100
var min = 10
var max = 1500
var bigArr = randomArr(range, min, max)


/**
 * 100    0.240ms  
 * 1000   2.230ms     10
 * 10000  105.640ms   52
 * 100000 6739.567ms  64
 */
timing(function() {
    sort(bigArr)
})
if (checkSort(res)) {
    print(res)
}