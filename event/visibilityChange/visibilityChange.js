var hidden, visibilityChange

if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange'
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden'
    visibilityChange = 'webkitvisibilitychange'
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden'
    visibilityChange = 'msvisibilitychange'
}

document.addEventListener(visibilityChange, changeTitle, false)

function changeTitle() {
    console.log(hidden)
    var title = document.querySelector('title')
    var msg = 'visibilityChange'
    if (document[hidden]) {
        msg = '快回来！'
    }
    title.innerHTML = msg
}