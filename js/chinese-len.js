const reg = /[\u4e00-\u9fa5]/g

const str1 = 'chinese'
const str2 = 'chinese and 英文'
const str3 = '英文'

function print (...args) {
  console.log(args.join(' '))
}

print('英文：', reg.test(str1))
print('中英：', reg.test(str2))
print('中文：', reg.test(str3))

function calcLen (str) {
  let arr = str.match(reg)
  let strLen = str.length
  let len = 0
  // print(typeof arr, arr instanceof Array)

  if (arr instanceof Array) {
    // print(arr.length)
    len = arr.length
  }

  strLen = strLen - len + len * 2

  return strLen
}

print(str1.length, calcLen(str1))
print(str2.length, calcLen(str2))
print(str3.length, calcLen(str3))
