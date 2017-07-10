// function compare(value1, value2) {
//     debugger
//     if (value1 < value2) {
//         return -1
//     } else if (value1 > value2) {
//         return 1
//     } else {
//         return 0
//     }
// }

// compare()

function print() {
    var arr = Array.prototype.slice.call(arguments)
    console.log(arr.join(''))
}

var name = 'the window'

var object = {
    name: 'object',
    getNameFunc: function() {
        return this.name
    }
}


print(object.getNameFunc())
print((object.getNameFunc)())
print((object.getNameFunc = object.getNameFunc)())
    // object.getNameFunc().call(object)