/**
 * javascript中的几种函数
 * 1、具名函数（命名函数）
 * 2、匿名函数
 */

/**
 * 获取指定函数的名称
 * @param{Function} fun 任意函数
 */
function getFunctionName(fun) {
    console.log(fun)
    if (fun.name !== undefined) {
        return fun.name
    }
}

function print() {
    var arr = Array.prototype.slice.call(arguments)
    console.log(arr.join(''))
}
// 测试
// function fun1() {}
// var fun2 = function() {}

// print(getFunctionName(fun1))
// print(getFunctionName(fun2))

// print('-----', 'end\n')


// var fn1 = function xxcanghai() {
//     print("in:fun1:", typeof xxcanghai) //in:fun1:function

// };
// print("out:fun1: ", typeof xxcanghai) //out:fun1: undefined 
// fn1()

// function fun22(params) {
//     print('in:fun2:', typeof fun22)
// }
// print('out:fun22:', typeof fun22) //out:fun22:function
// fun22() //fun2:function


// var f1 = function f11() {
//     print('in:', typeof f11)
// }
// print('out:', typeof f11)
// f1()

// function f2() {
//     print('in:', typeof f2)
// }
// print('out:', typeof f2)
// f2()

// var f3 = {
//     foo: function() {

//         print('foo in ', typeof foo)
//     }
// }
// f3.foo()

function fun(n, o) { // a
    console.log(o)
    return {
        fun: function(m) { // b
            return fun(m, n); // a
        }
    };
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3); //undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3); //undefined,0,1,2
//      n=0 o=undefined , n=o=0 m=1, n=o=1 m=2, n=o=2 m=3
var c = fun(0).fun(1); // n=0 o=undefined fun(0,undefined), m=1 n=0 o=0 fun(1,0)
c.fun(2); // o=1 n=1 m=2  fun(2,1)  
c.fun(3); //undefined,0,1,1