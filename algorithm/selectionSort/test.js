var selectionSort = require('./selection-sort').selectionSort
var helper = require('./helper')
var print = helper.print

// test
var nums = [23, 6, 8, 9, 342, 1, 34]
var floats = [2.3, 1.6, 8, 7.9, 34.2, 1, 34]
var strs = ['2', 'd', 'dt', 'a', 'ac']

var res = selectionSort(nums)
var res1 = selectionSort(floats)
var res2 = selectionSort(strs)

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.toString = function() {
    return this.age
}

var p1 = new Person('小明', 10)
var p2 = new Person('小丽', 12)
var p3 = new Person('Tom', 15)
var p4 = new Person('Jerry', 20)
var p5 = new Person('John', 9)
var obj = [p1, p2, p3, p4, p5]
var res3 = selectionSort(obj)

print('int: ', res)
print('float: ', res1)
print('str: ', res2)

for (var ii = 0; ii < obj.length; ii++) {
    print('obj: ', obj[ii].name, obj[ii].age, '岁')
}