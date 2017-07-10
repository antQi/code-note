/** 
 * 123456789  ==>  123,456,789
 * 1234567890  ==>  1,234,567,890
 */

function formatMoney(str) {
    if (!str) { return }

    //小数点不限制
    var arr = str.split('.');
    var intNum = arr[0];
    var floatNum = arr[1] > 0 ? '.' + arr[1] : '';

    if (intNum.length < 2) {
        return;
    }

    var reg = /(\d+)(\d{3})/;

    while (reg.test(intNum)) {
        intNum = intNum.replace(reg, '$1' + ',' + '$2');
    }

    return intNum + floatNum;
}

function formatMoney1(str) {
    if (!str) { return }

    //小数点不限制
    var arr = str.split('.');
    var intNum = arr[0];
    var floatNum = arr[1] > 0 ? '.' + arr[1] : '';

    if (intNum.length < 2) {
        return;
    }

    var intNumArr = intNum.split('').reverse();
    var len = intNumArr.length;
    var resNum = [];
    for (var i = len - 1; i >= 0; i--) {

        if (i > 0 && i != len - 1 && (i + 1) % 3 === 0) {
            resNum.push(',')
        }
        resNum.push(intNumArr[i])
    }
    return resNum.join('') + floatNum
}

console.log(formatMoney('123456789022.11'));
console.log(formatMoney1('1234890322122.11'));