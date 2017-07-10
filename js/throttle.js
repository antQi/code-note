var count = 0;

function test() {
    console.log(count++);
}

// //0.1 每次都有一个timer产生耶
// window.onscroll = function() {
//     var timer = null;
//     clearTimeout(timer);

//     timer = setTimeout(function() {
//         test()
//     }, 100)
// }

// // 0.2  产生了全局变量
// var time = null;
// window.onscroll = function() {
//     clearTimeout(timer)

//     timer = setTimeout(function() {
//         test()
//     }, 100)
// }

//去掉全局变量
//  但是 要是调皮的用户  一直滚动 一直滚动，那函数就不执行了
// window.onscroll = throttle(test, 200)

// function throttle(fn, delay) {
//     var timer = null;

//     return function() {
//         clearTimeout(timer)
//         timer = setTimeout(function() {
//             fn()
//         }, delay);
//     }
// }

// 优化，调皮用户造成的bug
/**
 * 
 * @param {*} fn [执行函数]
 * @param {*} delay [延迟多长时间]
 * @param {*} lastTime [多长时间触发一次]
 * @return 延迟执行的方法
 */
function throttle(fn, delay, lastTime) {
    var timer = null;
    var prev = null;

    return function() {
        var now = new Date().getTime();
        if (!prev) {
            prev = now;
        }
        if (lastTime && now - prev > lastTime) {
            fn();
            prev = now;
            clearTimeout(timer);
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn();
                prev = null;
            }, delay);
        }
    }
}
window.onscroll = throttle(test, 100, 1000)