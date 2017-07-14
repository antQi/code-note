function touchStart(event) {
    if (dragStart !== null) return;

    if (event.touches) {
        event = event.touches[0];
    }
    //抓取时的所在位置
    dragStart = event.clientY;

}

function touchMove(event) {
    if (dragStart === null) return;

    if (event.touches) {
        event = event.touches[0];
    }
    //得到抓取开始时于进行中的差值的百分比
    percentage = (dragStart - event.clientY) / window.screen.height; //和屏幕高度做比较
    if (percentage > 0) {
        // //向上拖动
        var translateY = 1 - 0.4 * percentage; //位置系数，可以微调
        $(event.target).next().css('-webkit-transform', 'translateY(' + translateY * 100 + '%)'); //下一个item上移动

    } else {
        //向下拖动
        var translateY = -(0.4 * percentage);
        $(event.target).css('-webkit-transform', 'translateY(' + translateY * 100 + '%)'); //当前item下移动
    }

}

function touchEnd(event) {

    dragStart = null; //标志位值空


    //抓取停止后，根据临界值做相应判断
    if (percentage >= dragThreshold) { //向下滚动
        $(event.target).css('-webkit-transform', 'translateY(-100%)');
        $(event.target).next().css('-webkit-transform', 'translateY(0)');
    } else if (Math.abs(percentage) >= dragThreshold) { //向上滚动
        $(event.target).css('-webkit-transform', 'translateY(100%)');
    } else { //没有达到临界值 恢复原样
        $(event.target).next().css('-webkit-transform', 'translateY(100%)');
    }
    //重置percentage
    percentage = 0;

}